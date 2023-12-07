import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'


function App() {


  return (
   <UserContextProvider>
   <h1 className='text-center mt-10 font-serif text-3xl'>Context api project</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
