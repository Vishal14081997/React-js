import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'

const App = () => {

  const fetchApi = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json()
      // console.log(data);
      setProducts(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchApi();
  }, [])

  const [products, setProducts] = useState([])
  console.log(products);

  return (
    <div className='flex gap-2  flex-wrap justify-between p-4 '>
      {
        products.map((item) => {
          console.log(item);
          return (
            <div>
              <ProductCard category={item.category} title={item.title} price= {item.price} rating={item.rating} image={item.image}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default App