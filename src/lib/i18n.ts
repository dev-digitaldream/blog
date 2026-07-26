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

/** Détecte la langue depuis le chemin URL (/en/...) côté client */
export function getUrlLanguage(): Language | null {
  if (typeof window === 'undefined') return null;
  return window.location.pathname.startsWith('/en') ? 'en' : null;
}

export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  const isEn = window.location.pathname.startsWith('/en');
  if (lang === 'en' && !isEn) {
    window.location.href = '/en' + window.location.pathname;
  } else if (lang === 'fr' && isEn) {
    window.location.href = window.location.pathname.replace(/^\/en/, '') || '/';
  } else {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}

export function getCurrentLanguage(): Language {
  return getUrlLanguage() || getStoredLanguage() || getBrowserLanguage();
}
