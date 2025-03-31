import React from 'react'
import { NavLink } from 'react-router-dom'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
});
 

// const {storeTokenInLS} = useAuth();



const userURL = "http://localhost:8000/api/auth/signup";

const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value

    setUser({
      ...user,
      [name]:value,
    });
  };    

  const navigate = useNavigate();

  
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
    const response = await fetch(userURL , {
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(user),
    });
    
    // const res_data = await response.json();

    if(response.ok) {
        navigate("/admin_employee")
        toast.success("Signed up Succesfully!")
        setUser ({ username : "",email : "",password : "" });
    } else {
        toast.error("Registration Failed")
    }
  
  console.log(response)
} catch (error) {
    console.log(error)
}

}
  return (
    <div>
       <div className='mt-[7rem] m-auto w-full max-w-lg border-2 p-6 rounded-md shadow-l'>
      
      <form action="" className='flex justify-center flex-col gap-4 ' 
      onSubmit={handleSubmit}
      >
      <h1 className='text-2xl md:text-4xl text-green-600 font-bold'>Admin Signup</h1>
      <label className='font-bold' htmlFor="username">Username</label>
      <input placeholder='Enter username' className='p-3 border rounded-md' 
        name="username"
        required 
        type="username"
        id='username'
        autoComplete='off'
        value={user.username}
        onChange={handleInput}
      
      />

      <label className='font-bold' htmlFor="email">Email</label>
      <input  type="email" placeholder='Enter your email' className='p-3 border rounded-md'
       name="email"
       required 
       id='email'
       autoComplete='off'
       value={user.email}
       onChange={handleInput}
      />

      <label className='font-bold' htmlFor="password">Password</label>
      <input placeholder='Enter your password' className='p-3 border rounded-md' 
       name="password"
       type="password" 
       required 
       id='password'
       autoComplete='off'
       value={user.password}
       onChange={handleInput}
      />

      <button className='w-full p-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-700 transition'>sign up</button>
      </form>

      <div className="logings flex content-center p-4">
      <p className=''>alraedy have an account? </p> 
      <NavLink to="/login" ><p className='underline'> login</p></NavLink>
      </div>

    </div>
    </div>
  )
}

export default Signup