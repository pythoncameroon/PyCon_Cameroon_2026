import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

export function useLocalizedPath() {
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const l = useCallback((path) => {
    if (path.startsWith('/')) {
      return `/${currentLang}${path}`;
    }
    return `/${currentLang}/${path}`;
  }, [currentLang]);

  return { l, lang: currentLang };
}
