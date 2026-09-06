import React from 'react'
import UserInfo from './components/UserInfo'
import UserProvider from './context/UserProvider'

const App = () => {
  return (
    <>
      <UserProvider>
        <UserInfo />
      </UserProvider>
    </>
  )
}

export default App