import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { SearchResultsContainer } from '../containers/SearchResultsContainer';

function Home(props) {
    let searchedQuery = '';
    if (props.location.state && props.location.state.query) {
        searchedQuery = props.location.state.query;
    }

    const client = new ApolloClient({
        uri: 'https://graphql.jupiter.co/'
    });

    return (
        <div>
            {/* <Navbar setSearchQuery={setSearchQuery} /> */}
            <br />
            <ApolloProvider client={client}>
                <main>
                    <SearchResultsContainer query={searchedQuery} page={1} />
                    {/* {console.log(SearchQuery)} */}
                </main>
            </ApolloProvider>
        </div>
    )
}

export default Home
