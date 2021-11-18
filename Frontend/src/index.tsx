import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from "./cache";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
const client = new ApolloClient({
  // required constructor fields
  uri: 'http://api.semblance.us/graphql',
  cache: cache,
  // optional constructor fields
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
