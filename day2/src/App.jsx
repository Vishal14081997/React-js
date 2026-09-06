
// import React, { useState } from 'react'

// const App = () => {
//   const [text, setText] = useState("")

//   const handleChange = (e) => {
//     console.log(e.target.vlaue);
//     setText(e.target.vlaue)
//   }

//   return (
//     <>
//       <div>Input Value : {text}</div>
//       <input type="text" onChange={handleChange} />
//     </>
//   )
// }

// export default App


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
// import StudentList from "./components/students/StudentList";

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
//     <div className="flex justify-center items-center h-screen">

//       <StudentList
//         students={data}
//         onDelete={handleDelete}
//       />

//     </div>
//   );
// };

// export default App;


//------------ 3rd --------------------


// import React from 'react'
// import Child from './components/Child'
// import ProductChild from './components/product/ProductChild'
// import ProductCard from './components/product/ProductCard'


// const App = () => {
//   let data = [
//     {
//       id: 1,
//       title: "iphone",
//       des: "this is iphone series of apple",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqioZaF8ShdcKs1hmTi4Qtp80R065OP3CA2eE2aI6NIw&s"
//     },
//     {
//       id: 2,
//       title: "sumsung s24 5g",
//       des: "this is series of A34",
//       price: 2000,
//       image: "	https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/j/o/-original-imahft5nm9eewyzh.jpeg?q=70"
//     },
//     {
//       id: 2,
//       title: "sumsung s24 5g",
//       des: "this is series of A34",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
//     },
//     {
//       id: 2,
//       title: "sumsung s24 5g",
//       des: "this is series of A34",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
//     },
//     {
//       id: 2,
//       title: "sumsung s24 5g",
//       des: "this is series of A34",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
//     },
//     {
//       id: 2,
//       title: "sumsung s24 5g",
//       des: "this is series of A34",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
//     },
//     {
//       id: 2,
//       title: "sumsung s24 5g",
//       des: "this is series of A34",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
//     },
//     {
//       id: 2,
//       title: "sumsung s24 5g",
//       des: "this is series of A34",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAK3kKQPuzcE1wev2IQDn0MSRCWo93eV8jp4d2mxhRQ&s"
//     }
//   ]

//   return (
//     <>
//       <div className='flex bg-amber-400 gap-10 p-5 justify-between'>
//         <Child heading="my name vishal singh" title="Child-1 components" />
//         <Child heading="my name vishal singh" title="Child-1 components" />
//         <Child heading="my name vishal singh" title="Child-1 components" />
//         <Child heading="my name vishal singh" title="Child-1 components" />
//       </div>

//       <div className='mt-10 flex gap-10 flex-wrap'>
//         {
//           data.map((item, index) => {
//             return (
//               <>
//                 <ProductChild productData={item} />
//               </>
//             )
//           })
//         }
//       </div>

//       <div>
//         <ProductCard/>
//       </div>
//     </>
//   )
// }
// export default App


// --------------- 4th ------------------------

// import { useEffect, useState } from "react";
// import Button from "@mui/material/Button";

// const CounterWithEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count Updated:", count);
//   }, [count]); //dependency


//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="bg-black p-10 flex flex-col gap-4 items-center">
//       <h1 className="text-white text-center text-2xl">
//         Count: {count}
//       </h1>

//       <Button
//         variant="contained"
//         onClick={handleIncrement}
//       >
//         Count + 1
//       </Button>
//     </div>
//   );
// };

// export default CounterWithEffect;

// State:- State component ke andar ek aisi value/data hoti hai jo time ke saath change ho sakti hai. Jab state change hoti hai, React component ko dobara render karta hai.

// State is a data or value that can change over time and when it changes, React re-renders the component.

// const [count, setCount] = useState(0);

// count → current state value
// setCount → state ko change karne ka function
// 0 → initial value

// useEffect ek React Hook hai jo component ke render hone ke baad side effects perform karne ke liye use hota hai, jaise API call , event listener, ya kisi state ke change hone par code chalana.

// useEffect is a React Hook used to perform side effects in a component, such as API calls, or running code when a value changes.


// useState ek React Hook hai jo functional component ke andar state create aur manage karne ke liye use hota hai.

// useState is a React Hook used to create and manage state inside a functional component.


// --------------- 5th ------------------------

// import Button from "@mui/material/Button";
// import { useState } from "react";

// const changeData = () => {
//   const [data, setData] = useState({
//     name: "aditiya",
//     age: "25 years",
//     gender: "male",
//     study: "web devloper"
//   })
//   const updatedata = () => {
//     setData({
//       name: "vishal",
//       age: "24 years",
//       gender: "male",
//       study: "Full stack devloper"
//     })
//   }

//   return (
//     <>
//       <div>
//         <h1>
//           My name is {data.name},
//           My age is {data.age},
//           My Gender is {data.gender},
//           My study is {data.study}
//         </h1>
//         <Button variant="contained" onClick={updatedata}> change data</Button>
//       </div>


//     </>
//   )
// }
// export default changeData; 