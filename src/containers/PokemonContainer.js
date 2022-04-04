import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import {GET_POKEMONS}  from '../graphql/get-pokemons'
import Pokemon from '../components/Pokemon'
import { Box, Flex, Heading, IconButton, useToast, Container } from '@chakra-ui/react'


const PokemonContainer = () => {
  const { data:{ pokemons } = {}} = useQuery(GET_POKEMONS,
    {
      variables: { first:9 },
    })
  return (
    <Flex direction="column" justify="center" align="center">
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </Flex>
  )
}

export default PokemonContainer