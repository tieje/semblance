import { ApolloClient, ApolloProvider } from '@apollo/client';
import { InMemoryCache } from "@apollo/client";
// import { cache } from ./cache;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { AppStateProvider } from './state/AppStateContext';
const client = new ApolloClient({
  // required constructor fields
  uri: 'http://api.semblance.us/graphql',
  cache: new InMemoryCache(),
  //cache: cache,
  // optional constructor fields
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
