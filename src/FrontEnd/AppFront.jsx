import {   Routes, Route } from 'react-router-dom';
import front_style from "../FrontEnd/assets/css/front_style.module.css";
import Home from './Home';
import Register from './Register';
import Login from './Login';
function AppFront() {
  return (
     <div className={front_style.frontend_bg}> 
    
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/studentregister" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* 
      <Route path="/signup" element={<Register/>}/>
       <Route path="/welcomeregister" element={<WelcomeRegister/>}/>
         <Route path="/lecturesignup" element={<LecturerRegister/>}/> */}
      </Routes>
 
    </div>
  );
}

export default AppFront;
