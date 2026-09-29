import React, { useCallback, useState } from 'react'
import Child from './components/ChildA'

const UseCallbackHook = () => {
  const [add, setAdd] = useState(0);
  // const Learning = ()=>{

  // }
  const [count, setCount] = useState(0)
  const Learning = useCallback(() => {

  }, [count]);

  return (
    <>
      <div>Learning UseCallbackHook</div>
      <Child Learning={Learning} count={count} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  )
}

export default UseCallbackHook