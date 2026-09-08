'use client';

import { createContext, useContext, useSyncExternalStore, useCallback } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  mounted: false,
});

export function useTheme() {
  return useContext(ThemeContext);
}

function subscribe(callback) {
  window.addEventListener('storage', callback);
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    mediaQuery.removeEventListener('change', callback);
  };
}

function getSnapshot() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return 'dark';
}

function getServerSnapshot() {
  return 'dark';
}

export default function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
    window.dispatchEvent(new Event('storage'));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}
