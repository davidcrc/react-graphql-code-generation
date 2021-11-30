import React from 'react';
import { gql } from '@apollo/client/core';
import { Pokemon } from './Pokemon';
import { useQuery } from '@apollo/client';
import { GetPokemonQuery } from './__generated__/graphql-types';

const query = gql`
  query GetPokemon($pokemon: String!) {
    pokemon(name: $pokemon) {
      name
      image
    }
  }
`;

export function ManualPikachu() {
  const { data, loading } = useQuery<GetPokemonQuery>(
    query,
    {
      variables: { pokemon: 'pikachu' },
    },
  );
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('data', data, loading);
  return (
    <Pokemon
      name={data!.pokemon!.name!}
      imageSrc={data!.pokemon!.image!}
    />
  );
}
