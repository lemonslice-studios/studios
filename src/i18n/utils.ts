import { en } from './en';
import { ja } from './ja';

export const languages = {
  en: 'English',
  ja: '日本語',
};

export const defaultLang = 'en';

export const ui = {
  en,
  ja,
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof en;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPathname(url: URL, lang: Lang) {
  const segments = url.pathname.split('/');
  
  // segments[0] is always "" because pathname starts with /
  
  // Remove current lang if it's there
  if (segments[1] && segments[1] in ui) {
    segments.splice(1, 1);
  }
  
  // Add new lang if it's not the default
  if (lang !== defaultLang) {
    segments.splice(1, 0, lang);
  }
  
  let path = segments.join('/');
  
  // Handle case where joining might result in empty string (unlikely but safe)
  if (path === "") path = "/";
  
  // Fix double slashes at the beginning if they occur
  path = path.replace(/\/+/g, '/');
  
  return path;
}
