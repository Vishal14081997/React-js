import React from 'react'
import UseRefHook from './UseRefHook'
import UseMemoHook from './UseMemoHook'
import UseCallbackHook from './UseCallbackHook'

const App = () => {
  return (
    <div>
      {/* <UseRefHook/> */}
      {/* <UseMemoHook/> */}
      <UseCallbackHook/>
    </div>
  )
}

export default App