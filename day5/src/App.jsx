import React from 'react'
import UseRefHook from './UseRefHook'
import UseMemoHook from './UseMemoHook'
import UseCallbackHook from './UseCallbackHook'
import Sum from './components/Sum'

const App = () => {
  return (
    <div>
      {/* <UseRefHook/> */}
      {/* <UseMemoHook/> */}
      {/* <UseCallbackHook/> */}
      <Sum/>
    </div>
  )
}

export default App