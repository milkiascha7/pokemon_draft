import React from 'react';
import './App.css';
// import { ApolloClient, InMemoryCache } from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import PokemonContainer from './containers/PokemonContainer';

function App() {
  const client = new ApolloClient({
    uri:'https://graphql-pokemon2.vercel.app',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
     <main>
      <PokemonContainer  />
     </main>
    </ApolloProvider>
  );
}

export default App;
