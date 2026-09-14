// import React, { createContext, useState } from 'react'
// export let themeContext = createContext()

// const ThemeContext = ({ children }) => {
//     let [theme, setTheme] = useState("black")

//     let themeObj = { theme, setTheme }
//     return (
//         <themeContext.Provider value={themeObj}>
//             <div style={{
//                 width: "100%",
//                 minHeight: "100vh",
//                 backgroundColor: theme
//             }}>
//                 {children}
//             </div>
//         </themeContext.Provider>
//     )
// }

// export default ThemeContext




import React, { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("black");

  const themeObj = {theme,setTheme};

  return (
    <themeContext.Provider value={themeObj}>
      <div
        className={`min-h-screen w-full ${
          theme === "black"
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </themeContext.Provider>
  );
};

export default ThemeContext;