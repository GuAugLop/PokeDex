import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { Card } from '../../components/Card';
import { Container, Wrapper, List } from './styles';

type Pokemon = {
  name: string;
  photo: string;
  url: string;
  type: [];
};

export const Home = () => {
  const theme = React.useContext(ThemeContext);
  const [offset, setOffset] = React.useState('pokemon?limit=30&offset=0');
  const [pause, setPause] = React.useState(false);
  const [data, setData] = React.useState<Pokemon[]>();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const getPokemons = async () => {
    const pokemons = data || [];
    try {
      setLoading(true);
      if (!pause) {
        const result = await fetch(`https://pokeapi.co/api/v2/${offset}`);
        const json = await result.json();
        const newOffset = json.next.split('/').pop();
        setOffset(newOffset);

        json.results.map(async (item: any) => {
          const pokemon = await (await fetch(item.url)).json();
          const type = pokemon.types.map((type: any) => type.type.name);
          pokemons.push({
            name: item.name,
            url: item.url,
            photo: pokemon.sprites.front_default,
            type,
          });
        });
        setData(pokemons);
        setPause(true);
      }
    } catch (err) {
      console.log(err);
      setError('Falha ao carregar os pokemons');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setPause(false);
      }, 500);
    }
  };

  React.useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container>
      <Wrapper>
        {data && !error ? (
          <List
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item: Pokemon, index) => index.toString()}
            renderItem={({ item }) => <Card data={item} />}
            onEndReached={getPokemons}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <Text>{error}</Text>
        )}
        {loading && (
          <ActivityIndicator color={theme.colors.secondary} size="large" />
        )}
      </Wrapper>
    </Container>
  );
};
