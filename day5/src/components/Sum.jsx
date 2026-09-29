import React from 'react'

const Sum = () => {
    const calculateSum = () => {
        let sum = 0;
        for(let i=1; i<=1000; i++){
            sum +=i;
        }
        return sum;
    }
    const total = calculateSum();

    return (
        <>
        <h1>This is our Math library</h1>

        
        </>
    )
}

export default Sum