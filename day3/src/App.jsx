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
//     // const [firstname, setFirstname] = useState('');
//     // const [lastname, setLastname] = useState('');
//     // const [email, setEmail] = useState('');
//     // const [password, setPassword] = useState('');

//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "" })

//     const handleChange = (e) => {
//         console.log(e.target.value)
//         console.log(e.target.name)
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//         console.log(formData)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitted(true);
//         // console.log(email, password, lastname, firstname);
//     };
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
//                     // onChange={(e) => setFirstname(e.target.value)}
//                     onChange={handleChange}
//                     type="text"
//                     name="firstname"
//                     value={formData.firstname}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 outline-none focus:border-blue-500"
//                 />

//                 <label htmlFor="lastname" className="block mb-1 text-gray-700">
//                     Lastname
//                 </label>
//                 <input
//                     // onChange={(e) => setLastname(e.target.value)}
//                     onChange={handleChange}
//                     type="text"
//                     name="lastname"
//                     value={formData.lastname}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 outline-none focus:border-blue-500"
//                 />

//                 <label htmlFor="email" className="block mb-1 text-gray-700">
//                     Email
//                 </label>
//                 <input
//                     // onChange={(e) => setEmail(e.target.value)}
//                     onChange={handleChange}
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 outline-none focus:border-blue-500"
//                 />

//                 <label htmlFor="password" className="block mb-1 text-gray-700">
//                     Password
//                 </label>
//                 <input
//                     // onChange={(e) => setPassword(e.target.value)}
//                     onChange={handleChange}
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 mb-5 outline-none focus:border-blue-500"
//                 />

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//                 >
//                     Submit
//                 </button>
//             </form>

//             {isSubmitted && (
//                 <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
//                     <h2 className="text-2xl font-bold mb-6 text-gray-800">
//                         Submitted Data
//                     </h2>

//                     <div className="space-y-3 text-gray-700">
//                         <p>
//                             <span className="font-semibold">Firstname:</span>{" "}
//                             {formData.firstname}
//                         </p>

//                         <p>
//                             <span className="font-semibold">Lastname:</span>{" "}
//                             {formData.lastname}
//                         </p>

//                         <p>
//                             <span className="font-semibold">Email:</span>{" "}
//                             {formData.email}
//                         </p>

//                         <p>
//                             <span className="font-semibold">Password:</span>{" "}
//                             {formData.password}
//                         </p>
//                     </div>
//                 </div>
//             )}



//         </div >
//     );
// }
// export default App;

// -------------- 5th ---------------------

// import React, { useState } from 'react';

// function App() {
//     const [step, setStep] = useState(1);

//     const handleStepIncrease = () => {
//         setStep((prev) => prev + 1);
//     };

//     const handlePreviousClick = () => {
//         setStep((prev) => prev - 1);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form Submitted");
//     };

//     return (
//         <form onSubmit={handleSubmit}>

//             <h3 style={{ color: step === 1 ? 'green' : 'black' }}>
//                 Name
//             </h3>

//             <h3 style={{ color: step === 2 ? 'green' : 'black' }}>
//                 Password Details
//             </h3>

//             <h3 style={{ color: step === 3 ? 'green' : 'black' }}>
//                 Marksheet
//             </h3>

//             {/* Step 1 */}
//             {step === 1 && (
//                 <>
//                     <input
//                         type="text"
//                         placeholder="Enter your name"
//                     />

//                     <input
//                         type="text"
//                         placeholder="Enter your lastname"
//                     />

//                     <button type="button" onClick={handleStepIncrease}>
//                         Next
//                     </button>
//                 </>
//             )}

//             {/* Step 2 */}
//             {step === 2 && (
//                 <>
//                     <input
//                         type="password"
//                         placeholder="Enter your password"
//                     />

//                     <input
//                         type="number"
//                         placeholder="Enter your age"
//                     />

//                     <button type="button" onClick={handleStepIncrease}>
//                         Next
//                     </button>

//                     <button type="button" onClick={handlePreviousClick}>
//                         Prev
//                     </button>
//                 </>
//             )}

//             {/* Step 3 */}
//             {step === 3 && (
//                 <>
//                     <label>Upload marksheet</label>

//                     <input type="file" />

//                     <button type="button" onClick={handlePreviousClick}>
//                         Prev
//                     </button>

//                     <button type="submit">
//                         Submit Form
//                     </button>
//                 </>
//             )}
//         </form>
//     );
// }
// export default App;


//---------------- 6th -------------------


// import React, { useState } from "react";

// const App = () => {
//     const [studentName, setStudentName] = useState("");
//     const [studentList, setStudentList] = useState([]);

//     const handleNameChange = (e) => {
//         setStudentName(e.target.value);
//     };

//     const handleAddStudent = () => {
//         if (studentName.trim() === "") {
//             return;
//         }
//         setStudentList([...studentList, studentName.trim()]);
//         setStudentName("");
//     };

//     return (
//         <div className="min-h-screen bg-slate-100 flex justify-center items-center p-4">

//             <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

//                 <div className="text-center mb-6">
//                     <h1 className="text-2xl font-bold text-slate-800">
//                         Student List
//                     </h1>

//                     <p className="text-sm text-slate-500 mt-1">
//                         Add and manage your students
//                     </p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-3">
//                     <input
//                         type="text"
//                         placeholder="Enter student name"
//                         value={studentName}
//                         onChange={handleNameChange}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") {
//                                 handleAddStudent();
//                             }
//                         }}
//                         className="flex-1 min-w-0 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                     />

//                     <button
//                         onClick={handleAddStudent}
//                         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition"
//                     >
//                         Add
//                     </button>
//                 </div>

//                 <div className="flex justify-between items-center mt-6 mb-3">
//                     <h2 className="text-lg font-semibold text-slate-700">
//                         Students
//                     </h2>

//                     <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
//                         {studentList.length}
//                     </span>
//                 </div>

//                 <div className="space-y-3">
//                     {studentList.length === 0 ? (
//                         <p className="text-center text-slate-400 py-6">
//                             No students added yet.
//                         </p>
//                     ) : (
//                         studentList.map((student, index) => {
//                             return (
//                                 <div
//                                     key={index}
//                                     className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3"
//                                 >
//                                     {/* Student Number */}
//                                     <div className="bg-blue-600 text-white w-9 h-9 rounded-full flex justify-center items-center font-bold">
//                                         {index + 1}
//                                     </div>

//                                     {/* Student Name */}
//                                     <h3 className="text-slate-700 font-medium">
//                                         {student}
//                                     </h3>
//                                 </div>
//                             );
//                         })
//                     )}
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default App;



