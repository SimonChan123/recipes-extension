import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Search from '../components/Search';
import { SearchResultsContainer } from '../containers/SearchResultsContainer';
import Navbar from '../components/Navbar';

function Home() {
    const [SearchQuery, setSearchQuery] = useState('');

    const client = new ApolloClient({
        uri: 'https://graphql.jupiter.co/'
    });

    return (
        <div>
            <Navbar />
            <Search setSearchQuery={setSearchQuery} />
            <br />
            <ApolloProvider client={client}>
                <main>
                    <SearchResultsContainer query={SearchQuery} page={1} />
                    {console.log(SearchQuery)}
                </main>
            </ApolloProvider>
        </div>
    )
}

export default Home
