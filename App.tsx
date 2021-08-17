import React from 'react';

import { ThemeProvider } from 'styled-components';
import light from './src/global/styles/themes/light';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes />
    </ThemeProvider>
  );
}
