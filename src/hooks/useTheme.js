import { useState, useEffect, useCallback } from 'react';

function getInitialTheme() {
  const saved = localStorage.getItem('pycon-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pycon-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, toggleTheme };
}
