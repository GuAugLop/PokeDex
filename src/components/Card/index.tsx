import React, { memo } from 'react';
import {
  Container,
  Details,
  Info,
  Name,
  Type,
  Button,
  TextButton,
  Image,
} from './styles';

type PokemonCard = {
  photo: string;
  name: string;
  url: string;
  type: string[];
};

type Props = {
  data: PokemonCard;
};

export const Card = React.memo(({ data }: Props) => {
  return (
    <Container>
      <Details>
        <Info>
          <Name>{data.name}</Name>
          <Type>{data.type && data.type.map((type) => type).join(' / ')}</Type>
        </Info>
        <Button>
          <TextButton>Details</TextButton>
        </Button>
      </Details>
      <Image
        source={{
          uri: data.photo,
        }}
        resizeMode="contain"
      />
    </Container>
  );
});
