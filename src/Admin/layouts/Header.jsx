import React from "react";
import { Link } from "react-router-dom";
import {  logout} from '../../services/Api';

function Header({toggleSidebar}) {
  
  const handleLogout = () => {
    // Remove user data
    logout();
  };
  
  return (
  
      <div>
        <div class="top-navbar flex-between gap-16">
 <button onClick={toggleSidebar} className="btn btn-outline-secondary mb-3 background_color_blue">
          ☰
        </button>
            <div class="flex-align gap-16">
              
                 <button type="button" class="toggle-btn d-xl-none d-flex text-26 text-gray-500"><i class="ph ph-list"></i></button>
              
{/*                 
                <form action="#" class="w-350 d-sm-block d-none">
                    <div class="position-relative">
                        <button type="submit" class="input-icon text-xl d-flex text-gray-100 pointer-event-none"><i class="ph ph-magnifying-glass"></i></button> 
                        <input type="text" class="form-control ps-40 h-40 border-transparent focus-border-main-600 bg-main-50 
                        rounded-pill placeholder-15" placeholder="Search..."/>
                    </div>
                </form> */}
            </div>
        
            <div class="flex-align gap-16">
                <div class="flex-align gap-8">
                    <div class="dropdown">
                        <button class="dropdown-btn shaking-animation text-gray-500 w-40 h-40 bg-main-50 hover-bg-main-100 transition-2 rounded-circle text-xl flex-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="position-relative">
                                <i class="ph ph-bell"></i>
                                <span class="alarm-notify position-absolute end-0"></span>
                            </span>
                        </button>
                        <div class="dropdown-menu dropdown-menu--lg border-0 bg-transparent p-0">
                            <div class="card border border-gray-100 rounded-12 box-shadow-custom p-0 overflow-hidden">
                                <div class="card-body p-0">
                                    <div class="py-8 px-24 bg-main-600">
                                        <div class="flex-between">
                                            <h5 class="text-xl fw-semibold text-white mb-0">Notifications</h5>
                                            <div class="flex-align gap-12">
                                                <button type="button" class="bg-white rounded-6 text-sm px-8 py-2 hover-text-primary-600"> New </button>
                                                <button type="button" class="close-dropdown hover-scale-1 text-xl text-white"><i class="ph ph-x"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-24 max-h-270 overflow-y-auto scroll-sm">
                                        <div class="d-flex align-items-start gap-12">
                                            <img src="https://dummyimage.com/53x53/919191/ffffff.png" alt="" class="w-48 h-48 rounded-circle object-fit-cover"/>
                                            <div class="border-bottom border-gray-100 mb-24 pb-24">
                                                <div class="flex-align gap-4">
                                                    <a href="#" class="fw-medium text-15 mb-0 text-gray-300 hover-text-main-600 text-line-2">Ashwin Bose is requesting access to Design File - Final Project. </a>
                                                   
                                                    <div class="dropdown flex-shrink-0">
                                                        <button class="text-gray-200 rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="ph-fill ph-dots-three-outline"></i>
                                                        </button>
                                                        <div class="dropdown-menu dropdown-menu--md border-0 bg-transparent p-0">
                                                            <div class="card border border-gray-100 rounded-12 box-shadow-custom">
                                                                <div class="card-body p-12">
                                                                    <div class="max-h-200 overflow-y-auto scroll-sm pe-8">
                                                                        <ul>
                                                                            <li class="mb-0">
                                                                                <a href="#" class="py-6 text-15 px-8 hover-bg-gray-50 text-gray-300 rounded-8 fw-normal text-xs d-block">
                                                                                    <span class="text">Mark as read</span>
                                                                                </a>
                                                                            </li>
                                                                            <li class="mb-0">
                                                                                <a href="#" class="py-6 text-15 px-8 hover-bg-gray-50 text-gray-300 rounded-8 fw-normal text-xs d-block">
                                                                                    <span class="text">Delete Notification</span>
                                                                                </a>
                                                                            </li>
                                                                            <li class="mb-0">
                                                                                <a href="#" class="py-6 text-15 px-8 hover-bg-gray-50 text-gray-300 rounded-8 fw-normal text-xs d-block">
                                                                                    <span class="text">Report</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 
                                                </div>
                                                <div class="flex-align gap-6 mt-8">
                                                    <img src="https://dummyimage.com/53x53/919191/ffffff.png" alt=""/>
                                                    <div class="flex-align gap-4">
                                                        <p class="text-gray-900 text-sm text-line-1">Design brief and ideas.txt</p>
                                                        <span class="text-xs text-gray-200 flex-shrink-0">2.2 MB</span>
                                                    </div>
                                                </div>
                                                <div class="mt-16 flex-align gap-8">
                                                    <button type="button" class="btn btn-main py-8 text-15 fw-normal px-16">Accept</button>
                                                    <button type="button" class="btn btn-outline-gray py-8 text-15 fw-normal px-16">Decline</button>
                                                </div>
                                                <span class="text-gray-200 text-13 mt-8">2 mins ago</span>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-start gap-12">
                                            <img src="assets/images/thumbs/notification-img2.png" alt="" class="w-48 h-48 rounded-circle object-fit-cover"/>
                                            <div class="">
                                                <a href="#" class="fw-medium text-15 mb-0 text-gray-300 hover-text-main-600 text-line-2">Patrick added a comment on Design Assets - Smart Tags file:</a>
                                                <span class="text-gray-200 text-13">2 mins ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="py-13 px-24 fw-bold text-center d-block text-primary-600 border-top border-gray-100 hover-text-decoration-underline"> View All </a>
        
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="dropdown">
                        <button class="text-gray-500 w-40 h-40 bg-main-50 hover-bg-main-100 transition-2 rounded-circle text-xl flex-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ph ph-globe"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu--md border-0 bg-transparent p-0">
                            <div class="card border border-gray-100 rounded-12 box-shadow-custom">
                                <div class="card-body">
                                    <div class="max-h-270 overflow-y-auto scroll-sm pe-8">
                                        <div class="form-check form-radio d-flex align-items-center justify-content-between ps-0 mb-16">
                                          <label class="ps-0 form-check-label line-height-1 fw-medium text-secondary-light" for="arabic"> 
                                            <span class="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-8"> 
                                              <img src="assets/images/thumbs/flag1.png" alt="" class="w-32-px h-32-px border borde 
                                              border-gray-100 rounded-circle flex-shrink-0"/>
                                              <span class="text-15 fw-semibold mb-0">Arabic</span>
                                            </span>
                                          </label>
                                          <input class="form-check-input" type="radio" name="language" id="arabic"/>
                                        </div>
                                        <div class="form-check form-radio d-flex align-items-center justify-content-between ps-0 mb-16">
                                          <label class="ps-0 form-check-label line-height-1 fw-medium text-secondary-light" for="germany"> 
                                            <span class="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-8"> 
                                              <img src="assets/images/thumbs/flag2.png" alt="" class="w-32-px h-32-px border borde 
                                              border-gray-100 rounded-circle flex-shrink-0"/>
                                              <span class="text-15 fw-semibold mb-0">Germany</span>
                                            </span>
                                          </label>
                                          <input class="form-check-input" type="radio" name="language" id="germany"/>
                                        </div>
                                        <div class="form-check form-radio d-flex align-items-center justify-content-between ps-0 mb-16">
                                          <label class="ps-0 form-check-label line-height-1 fw-medium text-secondary-light" for="english"> 
                                            <span class="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-8"> 
                                              <img src="assets/images/thumbs/flag3.png" alt="" class="w-32-px h-32-px border 
                                              borde border-gray-100 rounded-circle flex-shrink-0"/>
                                              <span class="text-15 fw-semibold mb-0">English</span>
                                            </span>
                                          </label>
                                          <input class="form-check-input" type="radio" name="language" id="english"/>
                                        </div>
                                        <div class="form-check form-radio d-flex align-items-center justify-content-between ps-0">
                                          <label class="ps-0 form-check-label line-height-1 fw-medium text-secondary-light" for="spanish"> 
                                            <span class="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-8"> 
                                              <img src="assets/images/thumbs/flag4.png" alt="" class="w-32-px h-32-px border borde 
                                              border-gray-100 rounded-circle flex-shrink-0"/>
                                              <span class="text-15 fw-semibold mb-0">Spanish</span>
                                            </span>
                                          </label>
                                          <input class="form-check-input" type="radio" name="language" id="spanish"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
                </div>
        
                <div class="dropdown">
                    <button class="users arrow-down-icon border border-gray-200 rounded-pill p-4 d-inline-block pe-40 position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="position-relative">
                            <img src="https://dummyimage.com/53x53/919191/ffffff.png" alt="Image" class="h-32 w-32 rounded-circle"/>
                            <span class="activation-badge w-8 h-8 position-absolute inset-block-end-0 inset-inline-end-0"></span>
                        </span>
                    </button>
                    <div class="dropdown-menu dropdown-menu--lg border-0 bg-transparent p-0">
                        <div class="card border border-gray-100 rounded-12 box-shadow-custom">
                            <div class="card-body">
                                <div class="flex-align gap-8 mb-20 pb-20 border-bottom border-gray-100">
                                    <img src="https://dummyimage.com/53x53/919191/ffffff.png" alt="" class="w-54 h-54 rounded-circle"/>
                                    <div class="">
                                        <h4 class="mb-0">Michel John</h4>
                                        <p class="fw-medium text-13 text-gray-200">examplemail@mail.com</p>
                                    </div>
                                </div>
                                <ul class="max-h-270 overflow-y-auto scroll-sm pe-4">
                                    <li class="mb-4">
                                        <a href="setting.html" class="py-12 text-15 px-20 hover-bg-gray-50 text-gray-300 rounded-8 flex-align gap-8 fw-medium text-15">
                                            <span class="text-2xl text-primary-600 d-flex"><i class="ph ph-gear"></i></span>
                                            <span class="text">Account Settings</span>
                                        </a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="pricing-plan.html" class="py-12 text-15 px-20 hover-bg-gray-50 text-gray-300 rounded-8 flex-align gap-8 fw-medium text-15">
                                            <span class="text-2xl text-primary-600 d-flex"><i class="ph ph-chart-bar"></i></span>
                                            <span class="text">Upgrade Plan</span>
                                        </a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="analytics.html" class="py-12 text-15 px-20 hover-bg-gray-50 text-gray-300 rounded-8 flex-align gap-8 fw-medium text-15">
                                            <span class="text-2xl text-primary-600 d-flex"><i class="ph ph-chart-line-up"></i></span>
                                            <span class="text">Daily Activity</span>
                                        </a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="message.html" class="py-12 text-15 px-20 hover-bg-gray-50 text-gray-300 rounded-8 flex-align gap-8 fw-medium text-15">
                                            <span class="text-2xl text-primary-600 d-flex"><i class="ph ph-chats-teardrop"></i></span>
                                            <span class="text">Inbox</span>
                                        </a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="email.html" class="py-12 text-15 px-20 hover-bg-gray-50 text-gray-300 rounded-8 flex-align gap-8 fw-medium text-15">
                                            <span class="text-2xl text-primary-600 d-flex"><i class="ph ph-envelope-simple"></i></span>
                                            <span class="text">Email</span>
                                        </a>
                                    </li>
                                    <li class="pt-8 border-top border-gray-100">
                                        <a href="sign-in.html" class="py-12 text-15 px-20 hover-bg-danger-50 text-gray-300 hover-text-danger-600 rounded-8 flex-align gap-8 fw-medium text-15">
                                            <span class="text-2xl text-danger-600 d-flex"><i class="ph ph-sign-out"></i></span>
                                            <span class="text">Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
  <Link  className="sidebar-menu__link" onClick={handleLogout}>
                               Logout
                                     </Link>
        
            </div>
        </div>
        
     </div>
  )
     
 
}

export default Header;
