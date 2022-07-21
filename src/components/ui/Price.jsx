import React from 'react'

const Price = ({ priceSale, priceOriginal }) => {
    return (
        <div className="book__price">
            {priceSale ? (
            <>
                <span className="book__price--normal">${priceOriginal.toFixed(2)}</span>$
                {priceSale.toFixed(2)}
            </>
            ) : (
                <>${priceOriginal.toFixed(2)}</>
            )}
      </div>
    )
}

export default Price