import React from 'react'

export function Product({ result }) {
    return (
        <div className="product">
            <div className="product__image">
                <img src={result.imageUrl} alt={result.name} />
            </div>
            <div className="product__name">
                <p>{result.name}</p>
                <br />
                <p>{result.productId.value}</p>
            </div>
            <div className="product__description">
                {result.description}
            </div>
        </div>
    )
}
