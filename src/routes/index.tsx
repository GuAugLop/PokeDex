import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { ThemeProvider } from 'styled-components/native';
import { AppContext } from '../context/AppContext';
import light from '../global/styles/themes/light';

export const Routes = () => {
  const { theme } = React.useContext(AppContext);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};
