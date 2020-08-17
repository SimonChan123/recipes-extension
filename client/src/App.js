import React, { useState, useEffect } from "react";
import "./App.css";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Search from './components/Search';
import { SearchResultsContainer } from './containers/SearchResultsContainer';

function App() {
  const [SearchQuery, setSearchQuery] = useState('');

  const client = new ApolloClient({
    uri: 'https://graphql.jupiter.co/'
  });

  return (
    <div className="App">
      <Search setSearchQuery={setSearchQuery} />
      <br />
      <ApolloProvider client={client}>
        <main>
          <SearchResultsContainer query={SearchQuery} page={1} />
          {console.log(SearchQuery)}
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
