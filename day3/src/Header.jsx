// import React, { useContext } from 'react'
// import { counterContext } from './context/CounterContext'
// import { themeContext } from './context/ThemeContext'

// export default function Header() {
//   let { count, setCount } = useContext(counterContext)
//   let { setTheme } = useContext(themeContext)

//   return (
//     <div>
//       <div className='btnOuter'>
//         <button onClick={() => setTheme("black")}>Black Theme</button>
//         <button onClick={() => setTheme("white")}>White Theme</button>
//       </div>
//       <h2>Header Section <button onClick={() => setCount(count + 1)}>Change Count</button></h2>
//     </div>
//   )
// }


import React, { useContext } from "react";
import { counterContext } from "./context/CounterContext";
import { themeContext } from "./context/ThemeContext";

export default function Header() {
  const { count, setCount } = useContext(counterContext);
  const { setTheme } = useContext(themeContext);

  // Arrow function
  const changeCount = () => {
    setCount(count + 1);
  };

  // Arrow function
  const changeTheme = (color) => {
    setTheme(color);
  };

  return (
    <div className="flex flex-col gap-6 p-6">

      {/* Theme Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => changeTheme("black")}
          className="rounded-lg bg-black px-5 py-2 font-semibold text-white shadow hover:bg-gray-800"
        >
          Black Theme
        </button>

        <button
          onClick={() => changeTheme("white")}
          className="rounded-lg border border-gray-300 bg-white px-5 py-2 font-semibold text-black shadow hover:bg-gray-100"
        >
          White Theme
        </button>
      </div>

      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-orange-100 p-5">
        <h2 className="text-2xl font-bold text-orange-700">
          Header Section
        </h2>

        <button
          onClick={changeCount}
          className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white shadow hover:bg-orange-600"
        >
          Change Count
        </button>
      </div>

    </div>
  );
}