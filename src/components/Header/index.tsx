import React from 'react';
import { Search } from '../Search';
import { Container, ButtonsContainer } from './styles';
import { Switch } from 'react-native-gesture-handler';
import { ThemeContext } from 'styled-components/native';

import { shade } from 'polished';

import Logo from '../../assets/logo.svg';
import { AppContext } from '../../context/AppContext';

export const Header = () => {
  const { toggleTheme, theme } = React.useContext(AppContext);
  const themeStyled = React.useContext(ThemeContext);

  return (
    <Container>
      <Logo />
      <ButtonsContainer>
        <Switch
          value={theme.title === 'light' ? false : true}
          onChange={toggleTheme}
          thumbColor="#fff"
          trackColor={{
            false: themeStyled.colors.secondary,
            true: shade(0.8, themeStyled.colors.secondary),
          }}
        />
        <Search />
      </ButtonsContainer>
    </Container>
  );
};
