import React from 'react'
import { UserContext } from '../context/UserProvider'
import { useContext } from 'react'

const UserInfo = () => {
    const { userName, setUserName } = useContext(UserContext)
    const handleChange = () => {
        setUserName("rajesh")
    }
    return (
        <>
            <div className='bg-amber-500 inline-block p-5 rounded-2xl mt-10 ml-10'>
                <div className='font-bold text-2xl'>Name:{userName}</div>
                <div className='mt-5'>
                    <button className='bg-blue-800 text-white rounded-2xl p-2' onClick={handleChange}>Change Name</button>
                </div>
            </div>
        </>
    )
}
export default UserInfo;