import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components/native';

import { Home } from '../screens/Home';
import { Header } from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <Navigator
      screenOptions={{
        header: () => <Header />,
        cardStyle: { backgroundColor: theme.colors.primary },
      }}
    >
      <Screen component={Home} name="stack/home" />
    </Navigator>
  );
};
