import React, { useRef } from 'react'

const UseRefHook = () => {
    const nameRef = useRef("vishal")
    const inputRef = useRef(null)
    const inputHandler = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.style.color = 'red'
    }
    const toggleHandler = () => {
        if (inputRef.current.style.display != "none") {
            inputRef.current.style.display = "none"
        } else {
            inputRef.current.style.display = "inline"
        }
    }
    return (
        <div>
            <h1>{nameRef.current}</h1>
            <input ref={inputRef} type="text" placeholder='Enter user name' />

            <button className='bg-amber-300 ' onClick={inputHandler}>Focus Input</button>
            <br />
            <button className='bg-gray-500' onClick={toggleHandler}>Toggle</button>
        </div>
    )
}

export default UseRefHook

// ---------------2nd --------------------------


// import React, { useRef, useState } from 'react'

// const UseRefHook = () => {
//     const countRef = useRef(0);
//     const handleClick = () => {
//         console.log(countRef);
//         countRef.current = countRef.current + 1;
//     }
//     return (
//         <div>
//             <button  onClick={handleClick}>Increase</button>
//             <h1>Count : {countRef.current}</h1>
//         </div>
//     )
// }

// export default UseRefHook


// useRef -> kisi bhi html element ko control krne and dom element ko access krne k liye es ka use kiya jata hai