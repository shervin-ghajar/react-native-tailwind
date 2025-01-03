import { getUtilities, UtilitiesType } from '../configs/generated/utilities';
import shakenUtilities from '../configs/generated/utilities/shakenUtilities';
import { theme } from '../theme';
import { ThemeMode } from '../types';
import { ThemeContext } from './context';
import { ThemeProviderType } from './types';
import { useEffect, useState } from 'react';

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [utilities, setUtilities] = useState<UtilitiesType>(shakenUtilities);
  const [mode, setMode] = useState<ThemeMode>(theme.mode);
  const isDarkMode = mode === 'dark';
  useEffect(() => {
    console.log('ThemeProvider Effect');
    getUtilities()
      .then((utilities) => {
        console.log('getUtilities');
        setUtilities(utilities);
      })
      .catch((error) => {
        console.log('getUtilities err', error);
      });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, utilities, isDarkMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
