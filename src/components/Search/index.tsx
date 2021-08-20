import React from 'react';
import { Container, Input } from './styles';
import { SearchIcon, XIcon } from 'react-native-heroicons/outline';
import { ThemeContext } from 'styled-components/native';

export const Search = () => {
  const theme = React.useContext(ThemeContext);
  const [focus, setFocus] = React.useState(true);

  return (
    <Container
      focus={focus}
      onPress={() => {
        setFocus(!focus);
      }}
    >
      {focus && <Input />}
      {focus ? (
        <XIcon
          color={theme.colors.secondary}
          width={23}
          height={23}
          style={{ right: 0 }}
        />
      ) : (
        <SearchIcon
          color={theme.colors.secondary}
          width={23}
          height={23}
          style={{ right: 0 }}
        />
      )}
    </Container>
  );
};
