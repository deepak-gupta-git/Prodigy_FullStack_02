import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  const employee = location.state?.employee || {};

  const [user, setUser] = useState(employee ? { ...employee, _id: employee._id } : {});
  const navigate = useNavigate();
    
  const userURL = `http://localhost:8000/api/auth/employee/${user._id}`;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("User ID:", user._id);
    if (!user._id) {
      toast.error("User ID is missing!");
      return;
    }

    try {
      const response = await fetch(userURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        navigate("/admin_employee");
        toast.success("Updated Successfully!");
      } else {
        toast.error("Update Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };

  return (
    <div>
      <div className="mt-[6rem] w-[60%] m-auto border-2 p-2">
        <form className="flex justify-center flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="text-3xl md:text-4xl text-green-600 font-bold text-center">Update Details</h1>

          <label className="font-bold" htmlFor="name">Name</label>
          <input 
            placeholder="Enter name"
            className="p-3 border rounded-md"
            name="name"
            required
            id="name"
            autoComplete="off"
            value={user.name || ""}
            onChange={handleInput}
          />

          <label className="font-bold" htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border rounded-md"
            name="email"
            required
            id="email"
            autoComplete="off"
            value={user.email || ""}
            onChange={handleInput}
          />

          <label className="font-bold" htmlFor="phone">Phone</label>
          <input
            placeholder="Enter phone"
            className="p-3 border rounded-md"
            name="phone"
            type="tel"
            required
            id="phone"
            autoComplete="off"
            value={user.phone || ""}
            onChange={handleInput}
          />

          <label className="font-bold" htmlFor="department">Department</label>
          <input
            placeholder="Enter department"
            className="p-3 border rounded-md"
            name="department"
            type="text"
            required
            id="department"
            autoComplete="off"
            value={user.department || ""}
            onChange={handleInput}
          />

          <label className="font-bold" htmlFor="salary">Salary</label>
          <input
            placeholder="Enter salary"
            className="p-3 border rounded-md"
            name="salary"
            type="text"
            required
            id="salary"
            autoComplete="off"
            value={user.salary || ""}
            onChange={handleInput}
          />

          <button className="w-full p-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-700 transition">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
