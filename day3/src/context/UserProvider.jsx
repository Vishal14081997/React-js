import React, { createContext } from 'react'
import { useState } from "react";
export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState("Vishal");
    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider