
// -------------1st ------------------

// import React, { useEffect, useState } from 'react'
// import StudentCard from './components/students/StudentCard'

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


//------------- 2nd -------------------

// import React, { useState } from "react";
// import StudentCard from "./components/students/StudentCard";

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
//     }
//   ];

//   const [data, setData] = useState(Studentdata);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="flex gap-20 justify-center items-center h-screen">

//       {
//         data.map((item) => {

//           return (
//             <StudentCard
//               key={item.id}
//               student={item}
//               onDelete={handleDelete}
//             />
//           );

//         })
//       }

//     </div>
//   );
// };

// export default App;



//------------ 3rd --------------------


import React from 'react'
import Child from './components/Child'
import ProductChild from './components/product/ProductChild'
import ProductCard from './components/product/ProductCard'


const App = () => {
  let data = [
    {
      id: 1,
      title: "iphone",
      des: "this is iphone series of apple",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqioZaF8ShdcKs1hmTi4Qtp80R065OP3CA2eE2aI6NIw&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "	https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/j/o/-original-imahft5nm9eewyzh.jpeg?q=70"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    },
    {
      id: 2,
      title: "sumsung s24 5g",
      des: "this is series of A34",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
    }
  ]

  return (
    <>
      <div className='flex bg-amber-400 gap-10 p-5 justify-between'>
        <Child heading="my name vishal singh" title="Child-1 components" />
        <Child heading="my name vishal singh" title="Child-1 components" />
        <Child heading="my name vishal singh" title="Child-1 components" />
        <Child heading="my name vishal singh" title="Child-1 components" />
      </div>

      <div className='mt-10 flex gap-10 flex-wrap'>
        {
          data.map((item, index) => {
            return (
              <>
                <ProductChild productData={item} />
              </>
            )
          })
        }
      </div>

      <div>
        <ProductCard/>
      </div>
    </>
  )
}
export default App