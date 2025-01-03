import { defaultTheme } from '../configs';
import { utilities } from '../configs/generated/utilities/shakenUtilities';
import { ThemeContextType } from './types';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  utilities,
  isDarkMode: defaultTheme.mode === 'dark',
  setMode: (mode) => mode,
});
