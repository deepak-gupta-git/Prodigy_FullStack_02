import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Admin_Employee from './Pages/Admin_Employee'
import Add_Employee from './Pages/Add_Employee'
import Update_Employee from "./Pages/Update_Employee"
import Employee_Details from './Pages/Employee_Details'

function App() {

  return (
    <>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/admin_employee' element={<Admin_Employee/>}/>
    <Route path='/add_Employee' element={<Add_Employee/>}/>
    <Route path='/update' element={<Update_Employee/>}/>
    <Route path='/employeeDetails' element={<Employee_Details/>}/>
    </Routes>
    </>
  )
}

export default App
