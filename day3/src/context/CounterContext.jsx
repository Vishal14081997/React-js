import React, { createContext, useState } from 'react'

export let counterContext = createContext()

const CounterContext = ({ children }) => {

    let [count, setCount] = useState(1)
    let counterObj = { count, setCount }

    return (
        <counterContext.Provider value={counterObj}>
            {children}
        </counterContext.Provider>
    )
}

export default CounterContext