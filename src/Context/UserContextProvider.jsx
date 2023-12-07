import React, { Children, useContext, useState } from 'react'
import {UserContext} from './userContext'
const UserContextProvider = ({Children}) => {
    const[user,setUser]=useState(null)
    
  return (
    <UserContext.Provider value={{user,setUser}}>
      {Children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
