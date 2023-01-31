
import './App.css';
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Students from './Components/Students';
import Contactus from './Components/Contactus';
import Navbar from './Components/Navbar'
import Edit from './Components/Edit';
import Addstudent from './Components/Addstudent';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
          <Route path="/Contact" element={<Contactus/>}/>
          <Route path="/Edit" element={<Edit/>}/>
          <Route path="/Addstudent" element={<Addstudent/>}/>
   </Routes>
    </div>
  )
}

export default App
