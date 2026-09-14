import React, { useContext } from 'react'
import { UserContext } from './App'

const ChildC = () => {
    const { user, setCount, count } = useContext(UserContext)
    // console.log(user);

    return (
        <div>
            {user.name} <br />
            <button onClick={() => setCount(count + 1)}>increase</button><br />
            {count}
        </div>
    )
}

export default ChildC