import { useLocation } from "react-router-dom";

const EmployeeDetails = () => {
  const location = useLocation();
  const employee = location.state?.employee || {};

  return (
    <div className="mt-10 max-w-xl mx-auto border p-6 rounded-md shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
        Employee Details
      </h2>
      <div className="space-y-2 text-lg text-gray-700">
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Salary:</strong> {employee.salary}</p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
