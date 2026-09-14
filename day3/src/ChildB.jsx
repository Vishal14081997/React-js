import React, { useContext } from 'react'
import { UserContext } from './App'

const ChildB = () => {
    const { count } = useContext(UserContext)
    return (
        <div>
            ChildB
            <div>{count}</div>
        </div>
    )
}

export default ChildB