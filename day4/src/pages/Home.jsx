import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/counterSlice';
import ProductCard from '../components/ProductCard';
import axios from "axios"
import { ToastContainer } from "react-toastify"

const Home = () => {
  let dispatch = useDispatch() // reducers k ander jo bhi action/funcation bananaye h ham n un ko  tiger krne ka kam krta hai
  const [products, setProducts] = useState([])
  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products")
      console.log(response.data.products);
      setProducts(response.data.products)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div>
      {/* <h1>Home</h1>
      <button
        onClick={() => dispatch(increment())}
        className='p-2 bg-amber-400 text-black font-bold rounded-2xl ' > Change increment</button> */}

      <section>
        <h1 className='text-center font-bold text-2xl'>Our Product</h1>
        <div className='grid grid-cols-4 gap-5 mt-5'>
          {
            products.map((obj, index) => {
              return (
                <ProductCard key={index} data={obj} />
              )
            })
          }
        </div>
        <ToastContainer />
      </section>


    </div>
  )
}

export default Home