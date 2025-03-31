import React, { useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Add = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    department:"",
    salary:""
});

const userURL = "http://localhost:8000/api/auth/employee";

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
        toast.success("Added Succesfully!")
        setUser ({ name : "",email : "",phone : "", department:"", salary:"" });
    } else {
        toast.error("Email Already Exist")
    }
  
  console.log(response)
} catch (error) {
    console.log(error)
}

}
  return (
    <div className="mt-24 flex justify-center px-4">
    <div className="w-full max-w-lg border-2 p-6 rounded-md shadow-lg">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl md:text-4xl text-green-600 font-bold text-center">
          Add Employee
        </h1>
        
        <label htmlFor="name" className="font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter username"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete="off"
          value={user.name}
          onChange={handleInput}
        />
        
        <label htmlFor="email" className="font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete="off"
          value={user.email}
          onChange={handleInput}
        />
        
        <label htmlFor="phone" className="font-medium">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete="off"
          value={user.phone}
          onChange={handleInput}
        />
        
        <label htmlFor="department" className="font-medium">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Enter your department"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete="off"
          value={user.department}
          onChange={handleInput}
        />
        
        <label htmlFor="salary" className="font-medium">Salary</label>
        <input
          type="text"
          id="salary"
          name="salary"
          placeholder="Enter your salary"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          autoComplete="off"
          value={user.salary}
          onChange={handleInput}
        />
        
        <button className="w-full p-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-700 transition">
          Add
        </button>
      </form>
    </div>
  </div>
  )
}

export default Add;