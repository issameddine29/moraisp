#!/usr/bin/env python3
"""
===============================================
MORAIS CLEANING - SCRIPT DE VALIDATION I18N
===============================================

Ce script valide la complétude des traductions multilingues :
- Vérifie que toutes les clés existent dans toutes les langues
- Détecte les clés manquantes
- Génère un rapport de complétude
- Valide la structure JSON

Usage:
    python3 validate_i18n.py
    
Output:
    - Rapport dans la console
    - Fichier report.json avec détails
"""

import json
import sys
from pathlib import Path
from typing import Dict, List, Set

class I18nValidator:
    def __init__(self, base_path='public/i18n'):
        self.base_path = Path(base_path)
        self.languages = ['fr', 'en', 'nl']
        self.errors = []
        self.warnings = []
        
    def load_translation_file(self, lang: str, page: str) -> Dict:
        """Charger un fichier de traduction"""
        filepath = self.base_path / lang / f'{page}.json'
        
        if not filepath.exists():
            self.errors.append(f"❌ Fichier manquant: {filepath}")
            return {}
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                return json.load(f)
        except json.JSONDecodeError as e:
            self.errors.append(f"❌ JSON invalide dans {filepath}: {e}")
            return {}
        except Exception as e:
            self.errors.append(f"❌ Erreur lecture {filepath}: {e}")
            return {}
    
    def get_all_keys(self, obj: Dict, prefix: str = '') -> Set[str]:
        """Extraire toutes les clés de manière récursive"""
        keys = set()
        
        for key, value in obj.items():
            full_key = f'{prefix}.{key}' if prefix else key
            keys.add(full_key)
            
            if isinstance(value, dict):
                keys.update(self.get_all_keys(value, full_key))
        
        return keys
    
    def validate_page(self, page: str) -> Dict:
        """Valider les traductions pour une page"""
        print(f"\n📄 Validation de: {page}")
        print("=" * 60)
        
        # Charger toutes les langues
        translations = {}
        all_keys = {}
        
        for lang in self.languages:
            translations[lang] = self.load_translation_file(lang, page)
            all_keys[lang] = self.get_all_keys(translations[lang])
            print(f"  {lang.upper()}: {len(all_keys[lang])} clés")
        
        # Trouver les clés de référence (généralement FR)
        reference_lang = 'fr'
        reference_keys = all_keys[reference_lang]
        
        # Vérifier chaque langue
        results = {
            'page': page,
            'total_keys': len(reference_keys),
            'languages': {}
        }
        
        for lang in self.languages:
            lang_keys = all_keys[lang]
            missing = reference_keys - lang_keys
            extra = lang_keys - reference_keys
            
            results['languages'][lang] = {
                'total': len(lang_keys),
                'missing': list(missing),
                'extra': list(extra),
                'completeness': len(lang_keys) / len(reference_keys) * 100 if reference_keys else 0
            }
            
            # Afficher résultats
            if missing:
                print(f"\n  ⚠️  {lang.upper()} - Clés manquantes ({len(missing)}):")
                for key in sorted(missing):
                    print(f"      - {key}")
                    self.warnings.append(f"{page}/{lang}: Clé manquante '{key}'")
            
            if extra:
                print(f"\n  ℹ️  {lang.upper()} - Clés supplémentaires ({len(extra)}):")
                for key in sorted(extra):
                    print(f"      - {key}")
            
            completeness = results['languages'][lang]['completeness']
            if completeness == 100:
                print(f"  ✅ {lang.upper()}: 100% complet")
            else:
                print(f"  ⚠️  {lang.upper()}: {completeness:.1f}% complet")
        
        return results
    
    def validate_all(self) -> Dict:
        """Valider toutes les pages"""
        print("=" * 60)
        print("🔍 VALIDATION COMPLÈTE DES TRADUCTIONS")
        print("=" * 60)
        
        # Trouver toutes les pages (basé sur FR)
        fr_path = self.base_path / 'fr'
        pages = [f.stem for f in fr_path.glob('*.json')] if fr_path.exists() else []
        
        if not pages:
            print("❌ Aucun fichier de traduction trouvé !")
            return {}
        
        print(f"\n📋 Pages trouvées: {len(pages)}")
        for page in pages:
            print(f"  - {page}")
        
        # Valider chaque page
        all_results = {}
        for page in pages:
            all_results[page] = self.validate_page(page)
        
        # Résumé global
        self.print_summary(all_results)
        
        return all_results
    
    def print_summary(self, results: Dict):
        """Afficher le résumé global"""
        print("\n" + "=" * 60)
        print("📊 RÉSUMÉ GLOBAL")
        print("=" * 60)
        
        total_pages = len(results)
        total_errors = len(self.errors)
        total_warnings = len(self.warnings)
        
        print(f"\n📄 Pages validées: {total_pages}")
        print(f"❌ Erreurs: {total_errors}")
        print(f"⚠️  Avertissements: {total_warnings}")
        
        if self.errors:
            print("\n❌ ERREURS CRITIQUES:")
            for error in self.errors:
                print(f"  {error}")
        
        # Complétude par langue
        print("\n📈 COMPLÉTUDE PAR LANGUE:")
        for lang in self.languages:
            total_keys = 0
            complete_keys = 0
            
            for page_results in results.values():
                if lang in page_results['languages']:
                    total_keys += page_results['total_keys']
                    lang_data = page_results['languages'][lang]
                    complete_keys += lang_data['total'] - len(lang_data['missing'])
            
            completeness = (complete_keys / total_keys * 100) if total_keys > 0 else 0
            
            if completeness == 100:
                icon = "✅"
            elif completeness >= 90:
                icon = "⚠️"
            else:
                icon = "❌"
            
            print(f"  {icon} {lang.upper()}: {completeness:.1f}%")
        
        # Verdict final
        print("\n" + "=" * 60)
        if total_errors == 0 and total_warnings == 0:
            print("✅✅✅ VALIDATION RÉUSSIE - Toutes les traductions sont complètes!")
        elif total_errors == 0:
            print(f"⚠️  VALIDATION PARTIELLE - {total_warnings} avertissements")
        else:
            print(f"❌ VALIDATION ÉCHOUÉE - {total_errors} erreurs à corriger")
        print("=" * 60)
    
    def generate_report(self, results: Dict, output_file='i18n_report.json'):
        """Générer un rapport JSON détaillé"""
        report = {
            'validation_date': str(Path().resolve()),
            'summary': {
                'total_pages': len(results),
                'total_errors': len(self.errors),
                'total_warnings': len(self.warnings)
            },
            'languages': self.languages,
            'pages': results,
            'errors': self.errors,
            'warnings': self.warnings
        }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        print(f"\n💾 Rapport détaillé sauvegardé: {output_file}")

def main():
    """Point d'entrée principal"""
    validator = I18nValidator()
    results = validator.validate_all()
    
    if results:
        validator.generate_report(results)
        
        # Code de sortie
        if validator.errors:
            sys.exit(1)  # Échec
        elif validator.warnings:
            sys.exit(2)  # Avertissements
        else:
            sys.exit(0)  # Succès
    else:
        sys.exit(1)

if __name__ == '__main__':
    main()
