import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div className='w-2/5 bg-slate-700 p-10 rounded-xl mt-10 mx-auto' >
            <div className='flex flex-col gap-8 bg-slate-600 p-10 rounded-xl' >
                <div className='flex flex-col gap-3 '>
                    <label htmlFor='username'><span className='font-semibold text-orange-500 text-xl'>Username :</span></label>
                    <input type="text"
                    className='px-3 py-1 rounded-md outline-green-400'
                        id='username'
                        placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-3 '>
                    <label htmlFor='pass'><span className='font-semibold text-orange-500 text-xl'>Password :</span></label>
                    <input type="password"
                    className='px-3 py-1 rounded-md outline-green-400'
                        id='pass'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit} className='mt-4 text-white bg-orange-500 py-2 px-10 mx-auto rounded-xl'>Login</button>
            </div>
        </div>
    )
}

export default Login
