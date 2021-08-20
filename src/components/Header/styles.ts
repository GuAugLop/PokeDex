import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: 100px;
  padding: 0 25px;
  padding-top: ${getStatusBarHeight()}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 110px;
`;
