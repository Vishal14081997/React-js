import React from 'react'

const ProductCard = ({ category, price, title, image }) => {
    return (
        <div className=' bg-amber-400 p-5 h-70 w-70'>
            <div><img src={image} width={100} height={100} alt="" /></div>
            <div className='flex flex-col '>
            <div>{title}</div>
            <div>{category}</div>
            <div>{price}</div>
            </div>

        </div>
    )
}

export default ProductCard