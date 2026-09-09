import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import MainLayout from './components/common/MainLayout.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cart"} element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App





//! What do Rendering and Re-rendering mean in React?

// Rendering:-
// Rendering ka matlab hai React ka component ke JSX ko process karke UI mein display karna.
// function App() {
//   return <h1>Hello</h1>;
// }
// Jab App first time screen par display hota hai, ise rendering kehte hain.


// Re-rendering:-
// Jab component already screen par hai aur uski state/props mein change hota hai, React component ko dobara render karta hai. Isse re-rendering kehte hain.

// const [count, setCount] = useState(0);
// <button onClick={() => setCount(count + 1)}>
//   {count}
// </button>

//! Explain Mounting and Updating phases of a component lifecycle.

// 1. Mounting:
// Jab component first time screen par appear hota hai, us process ko Mounting kehte hain.

// 2. Updating:
// Jab component already screen par hai aur uski state ya props change hoti hain, to component update/re-render hota hai.


//!Q .Create	a	functional	component	Counter	using	useState	that	shows	a	count	starting	at	0,	with	"+"	and	"−"	buttons	to increase/decrease	it.

//!Q .Write	a	component	that	renders	a	list	of	fruits	["Apple",	"Banana",	"Mango"]	using	.map().	Make	sure	each	list	item	has	a	proper unique	key.


//!Q .Write	a	component	that	conditionally	renders	"Welcome	back,	User!"	if	isLoggedIn	is	true,	and	"Please	log	in"	if	false,	using	a ternary	operator.	Then	add	a	second	line	that	only	shows	"You	have	new	notifications	"	when	notificationCount	>	0,	using	the &&	operator.


// import React from "react";

// const UserStatus = () => {
//   const isLoggedIn = true;
//   const notificationCount = 3;

//   return (
//     <div>
//       <h2>
//         {isLoggedIn ? "Welcome back, User!" : "Please log in"}
//       </h2>

//       {notificationCount > 0 && (
//         <p>You have new notifications</p>
//       )}
//     </div>
//   );
// };

// export default UserStatus;

//! Q .Build	a	signup	form	with	Email	and	Password	fields	using	a	single	state	object	(e.g.	{	email:	"",	password:	""	})	and	one handleChange	function	that	updates	the	correct	field	using	e.target.name.	On	submit,	prevent	the	page	reload	and	show	an	error message	(conditionally	rendered)	if	either	field	is	empty.


// import React, { useState } from "react";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.email === "" || formData.password === "") {
//       setError("Email and Password are required");
//       return;
//     }

//     setError("");
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="email"
//         placeholder="Enter Email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <input
//         type="password"
//         name="password"
//         placeholder="Enter Password"
//         value={formData.password}
//         onChange={handleChange}
//       />

//       <button type="submit">Signup</button>

//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Signup;