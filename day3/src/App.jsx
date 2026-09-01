// import React, { useEffect, useState } from 'react'
// import StudentCard from './components/StudentCard'

// // const StudentCard = (props) => {
// //   return (
// //     <>
// //       <div>{props.name}</div>
// //       <div>{props.age}</div>
// //       <div>{props.rollNo}</div>
// //       <div>{props.studentClass}</div>
// //     </>
// //   )
// // }

// const App = () => {

//   const Studentdata = [
//     {
//       id: 1,
//       name: "vishal",
//       age: 100,
//       rollNo: 101,
//       class: "10th"
//     },
//     {
//       id: 2,
//       name: "raj",
//       age: 100,
//       rollNo: 102,
//       class: "11th"
//     },
//     {
//       id: 3,
//       name: "mohan",
//       age: 100,
//       rollNo: 103,
//       class: "10th"
//     },
//     {
//       id: 4,
//       name: "rekha",
//       age: 100,
//       rollNo: 104,
//       class: "12th"
//     },
//   ]
//   const [data, setData] = useState(Studentdata)
//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id))
//   }
//   return (
//     <div className='flex gap-20 justify-center items-center h-screen'>

//       {
//         data.map((item) => {
//           // console.log(item);
//           return (
//             <div>
//               <StudentCard key={item.id} name={item.name} age={item.age} rollNo={item.rollNo} studentClass={item.class} onDelete={() => handleDelete(item.id)} />
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }
// export default App






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