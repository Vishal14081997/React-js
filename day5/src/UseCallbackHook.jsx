import React, { useState } from 'react'
import Child from './components/Child'

const UseCallbackHook = () => {
  const [add, setAdd] = useState(0)
  return (
    <>
      <div>Learning UseCallbackHook</div>
      <Child />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
    </>
  )
}

export default UseCallbackHook