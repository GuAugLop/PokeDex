import React from 'react';
import { usePersistState } from '../hooks/usePersistState';

import light from '../global/styles/themes/light';
import dark from '../global/styles/themes/dark';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ContextProps = {
  toggleTheme(): void;
  theme: typeof dark;
};
export const AppContext = React.createContext({} as ContextProps);

export const AppProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = () => {
    setTheme(() => (theme.title === 'light' ? dark : light));
  };
  return (
    <AppContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </AppContext.Provider>
  );
};
