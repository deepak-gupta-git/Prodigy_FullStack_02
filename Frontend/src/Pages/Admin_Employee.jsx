import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Admin_Employee = () => {
  const [employees, setEmployees] = useState([]);
  // const [employeeData, setEmployeeData] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
          const response = await fetch("http://localhost:8000/api/auth/employee");
          if (!response.ok) throw new Error("Failed to fetch employees");
  
          const result = await response.json();  
          console.log("Fetched Data:", result); // Debugging
  
          // Set the correct array (extract 'data' from response)
          setEmployees(result.data || []);
      } catch (error) {
          console.error("Error fetching employees:", error);
          setEmployees([]); // Fallback to empty array
      }
  };
  

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/auth/employee/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        toast.success("Deleted Successfully!");
        setEmployees((prevEmployees) => prevEmployees.filter(emp => emp._id !== id));
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Something went wrong");
    }
  };
  

  return (
    <div className="mt-20 max-w-5xl mx-auto px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-green-500 text-white rounded-md p-4 shadow-md">
      Welcome To Employee Management System
    </h1>
    
    <div className="flex justify-end mb-4">
      <Link to="/add_Employee">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">
          Add Employee
        </button>
      </Link>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 shadow-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 text-center">
                <td className="px-4 py-2 font-medium text-blue-600 hover:underline">
                  <Link to="/employeeDetails" state={{ employee }}>
                    {employee.name}
                  </Link>
                </td>
                <td className="px-4 py-2">{employee.email}</td>
                <td className="px-4 py-2">{employee.phone}</td>
                <td className="px-4 py-2">{employee.department}</td>
                <td className="px-4 py-2">{employee.salary}</td>
                <td className="px-4 py-2 flex justify-center space-x-2">
                  <Link to="/update" state={{ employee }}>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
                      Edit
                    </button>
                  </Link>
                  <button 
                    onClick={() => handleDelete(employee._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Admin_Employee;
