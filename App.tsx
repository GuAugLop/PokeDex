import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import { AppProvider, AppContext } from './src/context/AppContext';

import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Righteous_400Regular,
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <AppProvider>
        <StatusBar backgroundColor="transparent" translucent />
        <Routes />
      </AppProvider>
    );
  }
}
