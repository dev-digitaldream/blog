export const LANGUAGES = {
  fr: 'Français',
  en: 'English',
} as const;

export type Language = keyof typeof LANGUAGES;

export const DEFAULT_LANG: Language = 'fr';

export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  
  const browserLang = navigator.language.split('-')[0] as Language;
  return browserLang in LANGUAGES ? browserLang : DEFAULT_LANG;
}

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  
  const stored = localStorage.getItem('lang') as Language;
  return stored && stored in LANGUAGES ? stored : DEFAULT_LANG;
}

export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('lang', lang);
  window.location.reload();
}

export function getCurrentLanguage(): Language {
  return getStoredLanguage() || getBrowserLanguage();
}
