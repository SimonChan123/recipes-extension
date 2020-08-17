import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
    query search($query: String!, $page: Int!) {
        search(query: $query, page: $page) {
            productId {
                value
              }
            name
            price
            imageUrl
            description
        }
    }
`
