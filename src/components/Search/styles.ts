import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

type Props = {
  focus: boolean;
};

export const Container = styled(RectButton)<Props>`
  position: absolute;
  right: 0;
  width: ${(props) =>
    props.focus ? Dimensions.get('screen').width - 50 : 47}px;
  height: 47px;

  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.inputs};

  flex-direction: row;
`;

export const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.input_text};
  font-size: 20px;
  flex: 1;
  height: 100%;
`;
