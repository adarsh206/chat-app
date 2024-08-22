import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [user, setUser] = useState({
    username: '',
    password: '',
  })


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      username: '',
      password: '',
    })
  }
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form onSubmit={onSubmitHandler} action=''>
          
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
              <input value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}
              className='w-full input input-border h-10 bg-white text-black font-semibold' 
              type='text' placeholder='Username'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
              <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}
              className='w-full input input-border h-10 bg-white text-black font-semibold' 
              type='password' placeholder='Password'/>
          </div>
          
          
            <p className='text-center my-2'>Don't have an account? <Link to="/register" >
              signup
            </Link>
            </p>      
          <div>
            <button type='submit' className='btn btn-block btn-md mt-2 text-black border border-slate-700 bg-white hover:text-white'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login