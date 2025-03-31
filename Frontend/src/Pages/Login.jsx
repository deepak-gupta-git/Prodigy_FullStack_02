import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {toast} from "react-toastify"

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const LOGINURL = "http://localhost:8000/api/auth/login";

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(user)
    e.preventDefault();
    try {
      const response = await fetch(LOGINURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if(response.ok) {
        // alert("user Successful");
        // storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Logged in Successfully!");
        navigate("/admin_employee");
        storeTokenInLS(res_data.token);
      } else {
        toast.error(
        "Invalid Email or Password"
        );

        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
        <div className='mt-[7rem] m-auto w-full max-w-lg border-2 p-6 rounded-md shadow-lg'>
      <form action="" className='flex justify-center flex-col gap-4' 
      onSubmit={handleSubmit}
      >
      <h1 className='text-2xl md:text-4xl text-green-600 font-bold'>Admin Login</h1>

      <label className='font-bold' htmlFor="email">Email</label>
      <input type="email" placeholder='Enter your email' className='p-3 border rounded-md '
       name="email"
       required 
       id='email'
       autoComplete='off'
       value={user.email}
       onChange={handleInput}
      />

      <label className='font-bold' htmlFor="password">Password</label>
      <input type="password" placeholder='Enter your password' className='p-3 border rounded-md' 
       name="password"
       required 
       id='password'
       autoComplete='off'
       value={user.password}
       onChange={handleInput}
      />

      <button className='w-full p-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-700 transition'>login</button>
      </form>

      <div className="logings flex content-around p-4">
      <p >do not have account? </p> 
      <NavLink to="/signup" ><p className='underline'>signup</p></NavLink>
      </div>

    </div>
    </div>
  )
}

export default Login