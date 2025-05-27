import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'

function SideBar({  routes }) {
 
  
  return (
  
      <>
<aside className="sidebar">
 
     <button type="button" className="sidebar-close-btn text-gray-500 hover-text-white hover-bg-main-600 text-md w-24 h-24 border border-gray-100 hover-border-main-600 d-xl-none d-flex flex-center rounded-circle position-absolute"><i className="ph ph-x"></i></button>

    
    <a href="index.html" className="sidebar__logo text-center  position-sticky inset-block-start-0 bg-gray w-100 z-1">
        <img src={logo} alt="Logo"/>
    </a>

    <div className="sidebar-menu-wrapper overflow-y-auto scroll-sm">
        <div className="p-20 pt-10">
            <ul className="sidebar-menu">
            <li className="sidebar-menu__item">
                <Link to="/admin/dashboard" className="sidebar-menu__link">
                <span className="icon"><i className="ph ph-squares-four"></i></span>
                <span className="text">dashboard</span>
                    </Link>
                </li>
                <li className="sidebar-menu__item has-dropdown">
                     {/* <Link to="/admin" className="sidebar-submenu__link">Dashboard One</Link> */}
                      
                    <Link to="/admin/course" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-graduation-cap"></i></span>
                        <span className="text">Courses</span>
                    </Link>
                   
                </li>
               
                {/* <li className="sidebar-menu__item">
                    <a href="assignment.html" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-clipboard-text"></i></span>
                        <span className="text">Assignments</span>
                    </a>
                </li>
                <li className="sidebar-menu__item">
                    <a href="mentors.html" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-users"></i></span>
                        <span className="text">Mentors</span>
                    </a>
                </li>
                <li className="sidebar-menu__item">
                    <a href="resources.html" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-bookmarks"></i></span>
                        <span className="text">Resources</span>
                    </a>
                </li>
                <li className="sidebar-menu__item">
                    <a href="message.html" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-chats-teardrop"></i></span>
                        <span className="text">Messages</span>
                    </a>
                </li>
                <li className="sidebar-menu__item">
                    <a href="analytics.html" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-chart-bar"></i></span>
                        <span className="text">Analytics</span>
                    </a>
                </li>
                <li className="sidebar-menu__item">
                    <a href="event.html" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-calendar-dots"></i></span>
                        <span className="text">Events</span>
                    </a>
                </li>
                <li className="sidebar-menu__item">
                    <a href="library.html" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-books"></i></span>
                        <span className="text">Library</span>
                    </a>
                </li>
                <li className="sidebar-menu__item">
                    <a href="pricing-plan.html" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-coins"></i></span>
                        <span className="text">Pricing</span>
                    </a>
                </li>
                 */}
                 
                 <li className="sidebar-menu__item">
                <Link to="/admin/dytescreen" className="sidebar-menu__link">
                <span className="icon"><i class="ph ph-monitor"></i></span>
                        <span className="text">Dyte Screen</span>
                    </Link>
                </li>
<li className="sidebar-menu__item">
                <Link to="/admin/dytemettingroom" className="sidebar-menu__link">
                <span className="icon"><i class="ph ph-monitor"></i></span>
                        <span className="text">Dyte metting room</span>
                    </Link>
                </li>
                <li className="sidebar-menu__item">
                <Link to="/admin/setting" className="sidebar-menu__link">
                <span className="icon"><i className="ph ph-gear"></i></span>
                        <span className="text">Account Settings</span>
                    </Link>
                </li>

                <li className="sidebar-menu__item has-dropdown">
                    {/* <a href="#" className="sidebar-menu__link">
                        <span className="icon"><i className="ph ph-shield-check"></i></span>
                        <span className="text">Authetication</span>
                    </a> */}
                
                    <ul className="sidebar-submenu">
                        <li className="sidebar-submenu__item">
                            <a href="sign-in.html" className="sidebar-submenu__link">Sign In</a>
                        </li>
                        <li className="sidebar-submenu__item">
                            <a href="sign-up.html" className="sidebar-submenu__link">Sign Up</a>
                        </li>
                        <li className="sidebar-submenu__item">
                            <a href="forgot-password.html" className="sidebar-submenu__link">Forgot Password</a>
                        </li>
                        <li className="sidebar-submenu__item">
                            <a href="reset-password.html" className="sidebar-submenu__link">Reset Password</a>
                        </li>
                        <li className="sidebar-submenu__item">
                            <a href="verify-email.html" className="sidebar-submenu__link">Verify Email</a>
                        </li>
                        <li className="sidebar-submenu__item">
                            <a href="two-step-verification.html" className="sidebar-submenu__link">Two Step Verification</a>
                        </li>
                    </ul>
                  
                </li>
                
            </ul>
        </div>
        {/* <div className="p-20 pt-80">
            <div className="bg-main-50 p-20 pt-0 rounded-16 text-center mt-74">
                <span className="border border-5 bg-white mx-auto border-primary-50 w-114 h-114 rounded-circle flex-center text-success-600 text-2xl translate-n74">
                    <img src="assets/images/icons/certificate.png" alt="" className="centerised-img"/>
                </span>
                <div className="mt-n74">
                    <h5 className="mb-4 mt-22">Get Pro Certificate</h5>
                    <p className="">Explore 400+ courses with lifetime members</p>
                    <a href="pricing-plan.html" className="btn btn-main mt-16 rounded-pill">Get Access</a>
                </div>
            </div>
        </div> */}
    </div>

</aside>    
      </>
  );
}

export default SideBar;

