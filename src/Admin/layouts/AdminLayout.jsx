import React, { useEffect, useRef, useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import SideBar from "../layouts/SideBar";
import '../assets/css/bootstrap.min.css';
import '../assets/js/boostrap.bundle.min.js';
import '../assets/css/style.css';
import '../assets/css/icons.css';


import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../views/Dashboard";
import Course from "../views/Course";
import Setting from "../views/Setting";
// import { isAuthenticated } from "../services/Auth";
import PrivateRoute from '../../utils/PrivateRoute';
import RoleRoute from '../../utils/RoleRoute';
// import DyteScreen from "../views/DyteScreen";
import DyteMeetingRoom from "../views/DyteMeetingRoom";
import ClassMeeting from '../components/ClassMeeting';
import MultipleUser from "../components/MultipleUser.jsx";
import DyteJoin from "../views/DyteJoin.jsx";
import LiveMeetingList from "../views/LiveMeetingList.jsx";
import DoubtSession from "../views/DoubtSession.jsx";
import DyteClass from "../views/DyteClass.jsx";
import BroadcastExample from "../views/BroadcastExample.jsx";


function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);
  // const user =  localStorage.setItem("user", JSON.stringify({  role_name }));
  return (

    <div className="main-panel" >
      <SideBar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <div className={`dashboard-main-wrapper ${collapsed ? "full-width" : ""}`}>
        <Header toggleSidebar={toggleSidebar} />
        <Routes>
          {/* {user.role_name === 'student' && (
        <>
          <Route path="dashboard"  element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </>
      )} */}

          <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="course" element={<PrivateRoute><Course /></PrivateRoute>} />
          <Route path="meetingroom" element={<PrivateRoute><DyteMeetingRoom /></PrivateRoute>} />
          <Route path="dytejoin" element={<PrivateRoute><DyteJoin /></PrivateRoute>} />
          <Route path="doubtsession" element={<PrivateRoute><DoubtSession /></PrivateRoute>} />
          <Route path="dyteclass" element={<PrivateRoute><DyteClass /></PrivateRoute>} />
          <Route path="broadcast" element={<PrivateRoute><BroadcastExample /></PrivateRoute>} />
          <Route path="livemeetingclass" element={<PrivateRoute><LiveMeetingList /></PrivateRoute>} />


          <Route path="multipleuser" element={<PrivateRoute><MultipleUser /></PrivateRoute>} />
          <Route path="setting" element={<PrivateRoute><Setting /></PrivateRoute>} />

          {/* <Route path="/class:classId/:board/:subject" element={<ClassMeeting />} /> */}
          <Route path="/class:course_parent1/:course_parent2/:course_name" element={<ClassMeeting />} />

          <Route path="*" element={<h1>404 Page Not Found</h1>} />

          {/* 
            <Route path="dytescreen" element={<DyteScreen />} />
            <Route path="dytemettingroom" element={<DyteMeetingRoom />} />
            
             */}

        </Routes>
        <Footer />
      </div>
    </div>

  );
}

export default AdminLayout;
