import React from 'react';
import { useGetPokemonQuery } from './__generated__/graphql-types';
import { Pokemon } from './Pokemon';

export function AutomaticPikachu() {
  const { data, loading } = useGetPokemonQuery({
    variables: {
      pokemon: 'pikachu',
    },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Pokemon
      name={data!.pokemon!.name!}
      imageSrc={data!.pokemon!.image!}
    />
  );
}
