import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PRODUCTS } from '../graphql/get-products';
import { Product } from '../components/Product';

export function SearchResultsContainer({ query, page = 1 }) {

    const { data: { search = [] } = {} } = useQuery(
        GET_PRODUCTS, {
        variables: { query: query, page: page }
    });

    return (
        <div className="container">
            {search && search.map(s => {
                // console.log(s);
                return <Product key={s.productId.value} result={s} />
            })}
        </div>
    )
}
