// import React from 'react'
// import UserInfo from './components/UserInfo'
// import UserProvider from './context/UserProvider'

// const App = () => {
//   return (
//     <>
//       <UserProvider>
//         <UserInfo />
//       </UserProvider>
//     </>
//   )
// }

// export default App

//--------------- 2nd -------------------------

// const App = () => {
//   const handleClick = () => {
//     console.log('button clickedd...');
//   };

//   const handleInputChange = (e) => {
//     console.log(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     console.log(e.target.value);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <form>
//         <input type="text" onChange={handleInputChange} name="firstname" />
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" onChange={handlePasswordChange} name="password"/>
//       </form>
//     </div>
//   );
// };
// export default App;

// ----------------- 3rd --------------------

// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// function App() {
//     const [isActive, setIsActive] = useState(true);
//     const [isLoggedIn, setIsLogged] = useState(true);
//     const [isOpen, setIsOpen] = useState(false);
//     const [isShow, setIsShow] = useState(false);
//     const handleClick = () => {
//         setIsActive(!isActive); //toggle karna
//     };
//     const handleIsLoggedIn = () => {
//         setIsLogged(!isLoggedIn);
//     };
//     return (
//         <div>
//             {isActive ? (
//                 <h1 className="text-green-600 text-2xl font-bold">
//                     User is active
//                 </h1>
//             ) : (
//                 <h1 className="text-red-600 text-2xl font-bold">
//                     User is not active
//                 </h1>
//             )}
//             {isLoggedIn ? <h1>Hi vishal , welcome back</h1> : <h1>Please Login</h1>}

//             {isOpen && <h1>Model is open</h1>}
//             {!isOpen && <h1>Mode is not open</h1>}

//             <button onClick={handleIsLoggedIn}>
//                 {isLoggedIn ? 'Logout' : 'Login'}
//             </button>
//             <br />
//             <button onClick={handleClick}>toggle</button>
//             <br />
//             <input className='bg-red-100 border-2' type={isShow ? 'text' : 'password'} />
//             {isShow ? (
//                 <div onClick={() => setIsShow(false)}>
//                     <Eye />
//                 </div>
//             ) : (
//                 <div
//                     onClick={() => setIsShow(true)}
//                 >
//                     <EyeOff />
//                 </div>
//             )}
//         </div>
//     );
// }
// export default App;

//--------------- 4th ----------------

// import React, { useState } from 'react';

// function App() {
//     const [firstname, setFirstname] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email, password, lastname, firstname)
//     }
//     return (
//         <div className='flex'>
//             <form
//                 onSubmit={handleSubmit}
//                 className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
//             >
//                 <h2 className="text-2xl font-bold mb-5 text-gray-800">
//                     Registration Form
//                 </h2>

//                 <label htmlFor="firstname" className="block mb-1 text-gray-700">
//                     Firstname
//                 </label>
//                 <input
//                     onChange={(e) => setFirstname(e.target.value)}
//                     type="text"
//                     name="firstname"
//                     value={firstname}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 outline-none focus:border-blue-500"
//                 />

//                 <label htmlFor="lastname" className="block mb-1 text-gray-700">
//                     Lastname
//                 </label>
//                 <input
//                     onChange={(e) => setLastname(e.target.value)}
//                     type="text"
//                     name="lastname"
//                     value={lastname}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 outline-none focus:border-blue-500"
//                 />

//                 <label htmlFor="email" className="block mb-1 text-gray-700">
//                     Email
//                 </label>
//                 <input
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="email"
//                     name="email"
//                     value={email}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 outline-none focus:border-blue-500"
//                 />

//                 <label htmlFor="password" className="block mb-1 text-gray-700">
//                     Password
//                 </label>
//                 <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     name="password"
//                     value={password}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 mb-5 outline-none focus:border-blue-500"
//                 />

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//                 >
//                     Submit
//                 </button>
//             </form>


//             <div className="w-full max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-md border">
//                 <h1 className="text-2xl font-bold text-gray-800 mb-5">
//                     Live Preview
//                 </h1>

//                 <div className="space-y-4">
//                     <div className="flex justify-between border-b pb-2">
//                         <span className="font-semibold text-gray-600">Firstname</span>
//                         <span className="text-gray-800">{firstname}</span>
//                     </div>

//                     <div className="flex justify-between border-b pb-2">
//                         <span className="font-semibold text-gray-600">Lastname</span>
//                         <span className="text-gray-800">{lastname}</span>
//                     </div>

//                     <div className="flex justify-between border-b pb-2">
//                         <span className="font-semibold text-gray-600">Email</span>
//                         <span className="text-gray-800">{email}</span>
//                     </div>

//                     <div className="flex justify-between">
//                         <span className="font-semibold text-gray-600">Password</span>
//                         <span className="text-gray-800">{password}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default App;

// -------------- 5th ---------------------

// import React from 'react';
// import { useState } from 'react';
// function App() {
//   const [step, setStep] = useState(1);
//   const handleStepIncrease = () => {
//     setStep((prev) => {
//       return prev + 1;
//     });

//     // setStep(2)
//   };

//   const handlePreviousClick = () => {
//     setStep((prev) => prev - 1);
//   };
//   return (
//     <form>
//       <h3 style={{ color: step === 1 ? 'green' : 'black' }}>Name</h3>
//       <h3 style={{ color: step === 2 ? 'green' : 'black' }}>password details</h3>
//       <h3 style={{ color: step === 3 ? 'green' : 'black' }}>Marksheet</h3>
//       {step === 1 && (
//         <>
//           <input type="" placeholder="enter your name" />
//           <input type="" placeholder="enter your lastname" />
//           <button onClick={handleStepIncrease}>Next</button>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <input type="passowrd" placeholder="enter your password" />
//           <input type="number" placeholder="enter your age" />
//           <button onClick={handleStepIncrease}>next</button>
//           <button onClick={handlePreviousClick}>prev</button>
//         </>
//       )}

//       {step === 3 && (
//         <>
//           <label>upload marksheet</label>
//           <input type="file" />
//           <button onClick={handlePreviousClick}>prev</button>
//           <button>Submit form</button>
//         </>
//       )}
//     </form>
//   );
// }

// export default App;

// ------------- 6th ------------------------

// import React, { useState } from 'react';

// function App() {
//   // const [firstname, setFirstname] = useState('');
//   // const [lastname, setLastname] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "" })

//   const handleChange = (e) => {
//     console.log(e.target.value)
//     console.log(e.target.name)
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//     console.log(formData)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     // console.log(email, password, lastname, firstname);
//     // setFirstname('');

//     // setLastname('');
//     // setEmail('');
//     // setPassword('');
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstname">Firstname</label>
//         <input
//           onChange={handleChange}
//           type="text"
//           name="firstname"
//           value={formData.firstname}
//         />{' '}
//         <br />
//         <label htmlFor="lastname">Lastname</label>
//         <input
//           onChange={handleChange}
//           type="text"
//           name="lastname"
//           value={formData.lastname}
//         />{' '}
//         <br />
//         <label htmlFor="email">Email</label>
//         <input
//           onChange={handleChange}
//           type="email"
//           name="email"
//           value={formData.email}
//         />{' '}
//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           onChange={handleChange}
//           type="password"
//           name="password"
//           value={formData.password}
//         />
//         <button>Submit</button>
//       </form>

//       <h1>Live Preview</h1>
//       <p>firstname : {formData.firstname} </p>
//       <p>lastname : {formData.lastname}</p>
//       <p>email: {formData.email}</p>
//       <p>password: {formData.password} </p>

//       {isSubmitted ? (
//         <div>
//           <h1>Form data</h1>
//           <p>{formData.email}</p>
//           <p>{formData.firstname}</p>
//           <p>{formData.lastname}</p>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default App;
