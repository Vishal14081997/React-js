// import React, { useState } from 'react'

// const UseMemoHook = () => {
//     const [count, setCount] = useState(0);
//     const [text, setText] = useState('');

//     // Ye function har render pe chalega — chahe count badla ho ya text
//     const expensiveResult = () => {
//         console.log('Calculating...');
//         let result = 0;
//         for (let i = 0; i < 100000000000000; i++) {
//             result += i;
//         }
//         return result + count;
//     };

//     return (
//         <div>
//             <input value={text} onChange={(e) => setText(e.target.value)} />
//             <h1>Count: {count}</h1>
//             <h2>Expensive Result: {expensiveResult()}</h2>
//             <button onClick={() => setCount(count + 1)}>Increase Count</button>
//         </div>
//     )
// }

// export default UseMemoHook


import { useMemo, useState } from "react";
const UseMemoHook = () => {
   const [number, setNumber] = useState(100);
    const [text, setText] = useState('');

    // Ye heavy calculation hai
    const square = useMemo(() => {
        console.log('Calculating square...');
        return number * number;
    }, [number]); // <-- sirf 'number' change hone par ye dobara chalega

    return (
        <div>
            <input 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type here"
            />
            <p>Square of {number} is {square}</p>
            <button onClick={() => setNumber(number + 1)}>Increase Number</button>
        </div>
    )
}

export default UseMemoHook


// import { useMemo, useState } from "react";
// const UseMemoHook = () => {
//     const [count, setCount] = useState(0);
//     const [text, setText] = useState('');

//     const expensiveResult = useMemo(() => {
//         console.log('Calculating...');
//         let result = 0;
//         for (let i = 0; i < 10; i++) {
//             result += i;
//         }
//         return result + count;
//     }, [count]); // sirf count change hone par re-calculate hoga

//     return (
//         <div>
//             <input value={text} onChange={(e) => setText(e.target.value)} />
//             <h1>Count: {count}</h1>
//             <h2>Expensive Result: {expensiveResult}</h2>
//             <button onClick={() => setCount(count + 1)}>Increase Count</button>
//         </div>
//     )
// }

// export default UseMemoHook