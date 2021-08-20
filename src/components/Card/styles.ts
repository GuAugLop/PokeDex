import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  padding: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.cards};

  border-radius: 7px;
  margin-bottom: 20px;
`;

export const Details = styled.View`
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

export const Info = styled.View`
  width: 100%;
`;

export const Name = styled.Text`
  font-size: 28px;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.text_primary};
  text-transform: capitalize;
`;

export const Type = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.text_secondary};
`;

export const Button = styled(RectButton)`
  width: 120px;
  height: 35px;

  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 7px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text_button};
  font-family: ${(props) => props.theme.fonts.title};
`;

export const Image = styled.Image`
  width: 130px;
  height: 130px;
`;
