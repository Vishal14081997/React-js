// import React, { useContext } from 'react'
// import Header from './Header'
// import Footer from './Footer'
// import { counterContext } from './context/CounterContext'

// export default function Home() {
//   let { count } = useContext(counterContext)

//   return (
//     <div className='text-orange-500'>
//       <Header />
//       <h1 > Welcome to Home Page {count} </h1>
//       <Footer />
//     </div>
//   )
// }






import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { counterContext } from "./context/CounterContext";
import { themeContext } from "./context/ThemeContext";

export default function Home() {
  const { count } = useContext(counterContext);
  const { theme } = useContext(themeContext);

  return (
    <div
      className={`min-h-screen ${
        theme === "black"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <Header />

      <div className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h1 className="text-3xl font-bold">
          Welcome to Home Page
        </h1>

        <div className="mt-6 rounded-2xl bg-orange-100 p-8 shadow-lg">
          <p className="text-lg text-gray-700">
            Current Count
          </p>

          <h2 className="mt-2 text-5xl font-bold text-orange-600">
            {count}
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}