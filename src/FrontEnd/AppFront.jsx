import {   Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import { isAuthenticated } from '../services/Auth';
import Lecturer from './Lecturer';
function AppFront() {
  return (
     <div> 
    
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/studentregister" element={<Register/>}/>
      <Route path="/lecturerregister" element={<Lecturer/>}/>
      <Route path="/login" element={
    isAuthenticated() ? <Navigate to="/admin/dashboard" /> : <Login />
  }/>
      {/* 
      <Route path="/signup" element={<Register/>}/>
       <Route path="/welcomeregister" element={<WelcomeRegister/>}/>
         <Route path="/lecturesignup" element={<LecturerRegister/>}/> */}
      </Routes>
 
    </div>
  );
}

export default AppFront;
