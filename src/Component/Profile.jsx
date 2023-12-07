import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


const Profile = () => {
    const{user}=useContext(UserContext)
  if (!user) {
    return <h3 className='text-center font-serif mt-10 text-2xl'>Please login</h3>
  }

    return <h2 className='text-center font-serif mt-10 text-2xl'>Welcome : <span className='text-blue-700'>{user.username}</span></h2>
  
}

export default Profile
