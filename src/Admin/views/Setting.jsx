import React, { useState } from "react";
import SettingProfileImg from '../assets/images/setting-profile-img.jpg';

import SettingCoverImg from '../assets/images/setting-cover-img.png';
import SettingCoverImgProfile from '../assets/images/setting-cover-img_p.png';

function Setting() {
    const [activeTab, setActiveTab] = useState("home");
    const sectionStyle = {
        backgroundImage: `url(${SettingCoverImg})`,

    };
    const profileImgStyle = {
        backgroundImage: `url(${SettingProfileImg})`,

    };
    const profileImgCover = {
        backgroundImage: `url(${SettingCoverImgProfile})`,

    };

    return (

        <div className="dashboard-body">
            <div className="breadcrumb mb-24">
                <ul className="flex-align gap-4">
                    <li><a href="index.html" className="text-gray-200 fw-normal text-15 hover-text-main-600">Home</a></li>
                    <li> <span className="text-gray-500 fw-normal d-flex"><i className="ph ph-caret-right"></i></span> </li>
                    <li><span className="text-main-600 fw-normal text-15">Setting</span></li>
                </ul>
            </div>
            <div className="card overflow-hidden">
                <div className="card-body p-0">
                    <div className="cover-img position-relative">
                        <label for="coverImageUpload" className="btn border-gray-200 text-gray-200 fw-normal hover-bg-gray-400 rounded-pill py-4 px-14 position-absolute inset-block-start-0 inset-inline-end-0 mt-24 me-24">Edit Cover</label>
                        <div className="avatar-upload">
                            <input type='file' id="coverImageUpload" accept=".png, .jpg, .jpeg" />
                            <div className="avatar-preview">
                                <div id="coverImagePreview" style={sectionStyle}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="setting-profile px-24">
                        <div className="flex-between">
                            <div className="d-flex align-items-end flex-wrap mb-32 gap-24">
                                <img style={profileImgStyle} alt=""
                                    className="w-120 h-120 rounded-circle border border-white" />
                                <div>
                                    <h4 className="mb-8">Mohid Khan</h4>
                                    <div className="setting-profile__infos flex-align flex-wrap gap-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-gray-600 d-flex text-lg"><i className="ph ph-swatches"></i></span>
                                            <span className="text-gray-600 d-flex text-15">Class 12 CBSE</span>
                                        </div>
                                        <div className="flex-align gap-6">
                                            <span className="text-gray-600 d-flex text-lg"><i className="ph ph-map-pin"></i></span>
                                            <span className="text-gray-600 d-flex text-15">Sans Fransisco</span>
                                        </div>
                                        <div className="flex-align gap-6">
                                            <span className="text-gray-600 d-flex text-lg"><i className="ph ph-calendar-dots"></i></span>
                                            <span className="text-gray-600 d-flex text-15">Join August 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <ul className="nav common-tab style-two nav-pills mb-0" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                                        onClick={() => setActiveTab("home")}
                                        type="button"
                                    >
                                        My Details
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                                        onClick={() => setActiveTab("profile")}
                                        type="button"
                                    >
                                        Profile
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === "password" ? "active" : ""}`}
                                        onClick={() => setActiveTab("password")}
                                        type="button"
                                    >
                                        Password
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === "home" ? "show active" : ""}`}>
                    <div className="tab-pane fade show active" id="pills-details" role="tabpanel" aria-labelledby="pills-details-tab" tabindex="0">
                        <div className="card mt-24">
                            <div className="card-header border-bottom">
                                <h4 className="mb-4">My Details</h4>
                                <p className="text-gray-600 text-15">Please fill full details about yourself</p>
                            </div>
                            <div className="card-body">
                                <form action="#">
                                    <div className="row gy-4">
                                        <div className="col-sm-6 col-xs-6">
                                            <label for="fname" className="form-label mb-8 h6">First Name</label>
                                            <input type="text" className="form-control py-11" id="fname" placeholder="Enter First Name" />
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <label for="lname" className="form-label mb-8 h6">Last Name</label>
                                            <input type="text" className="form-control py-11" id="lname" placeholder="Enter Last Name" />
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <label for="email" className="form-label mb-8 h6">Email</label>
                                            <input type="email" className="form-control py-11" id="email" placeholder="Enter Email" />
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <label for="phone" className="form-label mb-8 h6">Phone Number</label>
                                            <input type="number" className="form-control py-11" id="phone" placeholder="Enter Phone Number" />
                                        </div>
                                        <div className="col-12">
                                            <label for="imageUpload" className="form-label mb-8 h6">Your Photo</label>
                                            <div className="flex-align gap-22">
                                                <div className="avatar-upload flex-shrink-0">
                                                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                    <div className="avatar-preview">
                                                        <div id="profileImagePreview" style={profileImgCover}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="avatar-upload-box text-center position-relative flex-grow-1 py-24 px-4 rounded-16 border border-main-300 border-dashed bg-main-50 hover-bg-main-100 hover-border-main-400 transition-2 cursor-pointer">
                                                    <label for="imageUpload" className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 rounded-16 cursor-pointer z-1"></label>
                                                    <span className="text-32 icon text-main-600 d-inline-flex"><i className="ph ph-upload"></i></span>
                                                    <span className="text-13 d-block text-gray-400 text my-8">Click to upload or drag and drop</span>
                                                    <span className="text-13 d-block text-main-600">SVG, PNG, JPEG OR GIF (max 1080px1200px)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <label for="role" className="form-label mb-8 h6">School</label>
                                            <input type="text" className="form-control py-11" id="school" placeholder="Enter School" />
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <label for="role" className="form-label mb-8 h6">City</label>
                                            <input type="text" className="form-control py-11" id="city" placeholder="Enter City" />
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <label for="zip" className="form-label mb-8 h6">Pin Code</label>
                                            <input type="text" className="form-control py-11" id="zip" placeholder="Enter Pin Code" />
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <label for="zip" className="form-label mb-8 h6">Address</label>
                                            <input type="text" className="form-control py-11" id="address" placeholder="Enter address" />
                                            
                                        </div>
                                        {/* <div className="col-12">
                                            <div className="editor">
                                                <label className="form-label mb-8 h6">Bio</label>
                                                <div id="editor">
                                                    <p>I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-12">
                                            <div className="flex-align justify-content-end gap-8">
                                                <button type="reset" className="btn btn-outline-main bg-main-100 border-main-100 text-main-600 rounded-pill py-9">Cancel</button>
                                                <button type="submit" className="btn btn-main rounded-pill py-9">Save  Changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === "profile" ? "show active" : ""}`}>
                <div class="row gy-4">
                        <div class="col-lg-6">
                            <div class="card mt-24">
                                <div class="card-body">
                                    <h6 class="mb-12">About Me</h6>
                                    <p class="text-gray-600 text-15 rounded-8 border border-gray-100 p-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa tellus ac augue. Lectus arcu at in in rhoncus malesuada ipsum turpis.</p>
                                </div>
                            </div>
                            <div class="card mt-24">
                                <div class="card-body">
                                    <h6 class="mb-12">Recent Messages</h6>
                                    
                                    <div class="rounded-8 border border-gray-100 p-16 mb-16">
                                        <div class="comments-box__content flex-between gap-8">
                                            <div class="flex-align align-items-start gap-12">
                                                <img src="https://dummyimage.com/130x130/919191/ffffff.png" class="w-32 h-32 rounded-circle object-fit-cover flex-shrink-0" alt="User Image"/>
                                                <div>
                                                    <h6 class="text-lg mb-8">Michel Smith</h6>
                                                    <p class="text-gray-600 text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa </p>
                                                </div>
                                            </div>
                                            <button type="button" class="flex-shrink-0 fw-bold text-13 text-main-600 flex-align gap-8 hover-text-main-800">Reply <i class="ph ph-arrow-bend-up-left d-flex text-lg"></i> </button>
                                        </div>
                                    </div>

                                    <div class="rounded-8 border border-gray-100 p-16 mb-16">
                                        <div class="comments-box__content flex-between gap-8">
                                            <div class="flex-align align-items-start gap-12">
                                                <img src="https://dummyimage.com/130x130/919191/ffffff.png" class="w-32 h-32 rounded-circle object-fit-cover flex-shrink-0" alt="User Image"/>
                                                <div>
                                                    <h6 class="text-lg mb-8">Zara Maliha</h6>
                                                    <p class="text-gray-600 text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa </p>
                                                </div>
                                            </div>
                                            <button type="button" class="flex-shrink-0 fw-bold text-13 text-main-600 flex-align gap-8 hover-text-main-800">Reply <i class="ph ph-arrow-bend-up-left d-flex text-lg"></i> </button>
                                        </div>
                                    </div>

                                    <div class="rounded-8 border border-gray-100 p-16 mb-16">
                                        <div class="comments-box__content flex-between gap-8">
                                            <div class="flex-align align-items-start gap-12">
                                                <img src="https://dummyimage.com/130x130/919191/ffffff.png" class="w-32 h-32 rounded-circle object-fit-cover flex-shrink-0" alt="User Image"/>
                                                <div>
                                                    <h6 class="text-lg mb-8">Simon Doe</h6>
                                                    <p class="text-gray-600 text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa </p>
                                                </div>
                                            </div>
                                            <button type="button" class="flex-shrink-0 fw-bold text-13 text-main-600 flex-align gap-8 hover-text-main-800">Reply <i class="ph ph-arrow-bend-up-left d-flex text-lg"></i> </button>
                                        </div>
                                    </div>

                                    <div class="rounded-8 border border-gray-100 p-16 mb-16">
                                        <div class="comments-box__content flex-between gap-8">
                                            <div class="flex-align align-items-start gap-12">
                                                <img src="https://dummyimage.com/130x130/919191/ffffff.png" class="w-32 h-32 rounded-circle object-fit-cover flex-shrink-0" alt="User Image"/>
                                                <div>
                                                    <h6 class="text-lg mb-8">Elejabeth Jenny</h6>
                                                    <p class="text-gray-600 text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa </p>
                                                </div>
                                            </div>
                                            <button type="button" class="flex-shrink-0 fw-bold text-13 text-main-600 flex-align gap-8 hover-text-main-800">Reply <i class="ph ph-arrow-bend-up-left d-flex text-lg"></i> </button>
                                        </div>
                                    </div>

                                    <div class="rounded-8 border border-gray-100 p-16 mb-16">
                                        <div class="flex-between gap-8">
                                            <div class="flex-align align-items-start gap-12">
                                                <img src="https://dummyimage.com/130x130/919191/ffffff.png" class="w-32 h-32 rounded-circle object-fit-cover flex-shrink-0" alt="User Image"/>
                                                <div>
                                                    <h6 class="text-lg mb-8">Ronald Doe</h6>
                                                    <p class="text-gray-600 text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa </p>
                                                </div>
                                            </div>
                                            <button type="button" class="flex-shrink-0 fw-bold text-13 text-main-600 flex-align gap-8 hover-text-main-800">Reply <i class="ph ph-arrow-bend-up-left d-flex text-lg"></i> </button>
                                        </div>
                                    </div>

                                    <a href="#" class="flex-shrink-0 fw-bold text-13 text-main-600 flex-align gap-8 hover-text-main-800 hover-text-decoration-underline">
                                        View All <i class="ph ph-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="card mt-24">
                                <div class="card-body">
                                    <h6 class="mb-12">Social Media</h6>
                                    <ul class="flex-align flex-wrap gap-8">
                                        <li>
                                            <a href="https://www.facebook.com" class="flex-center w-36 h-36 border border-main-600 text-main-600 rounded-circle text-xl hover-bg-main-100 hover-border-main-800"><i class="ph ph-facebook-logo"></i></a> 
                                        </li>
                                        <li>
                                            <a href="https://www.google.com" class="flex-center w-36 h-36 border border-main-600 text-main-600 rounded-circle text-xl hover-bg-main-100 hover-border-main-800"> <i class="ph ph-twitter-logo"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com" class="flex-center w-36 h-36 border border-main-600 text-main-600 rounded-circle text-xl hover-bg-main-100 hover-border-main-800"><i class="ph ph-linkedin-logo"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com" class="flex-center w-36 h-36 border border-main-600 text-main-600 rounded-circle text-xl hover-bg-main-100 hover-border-main-800"><i class="ph ph-instagram-logo"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card mt-24">
                                <div class="card-body">
                                    <div class="row gy-4">
                                        <div class="col-xxl-4 col-xl-6 col-md-4 col-sm-6">
                                            <div class="statistics-card p-xl-4 p-16 flex-align gap-10 rounded-8 bg-main-50">
                                                <span class="text-white bg-main-600 w-36 h-36 rounded-circle flex-center text-xl flex-shrink-0"><i class="ph ph-users-three"></i></span>
                                                <div>
                                                    <h4 class="mb-0">450k</h4>
                                                    <span class="fw-medium text-main-600">Followers</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-md-4 col-sm-6">
                                            <div class="statistics-card p-xl-4 p-16 flex-align gap-10 rounded-8 bg-info-50">
                                                <span class="text-white bg-info-600 w-36 h-36 rounded-circle flex-center text-xl flex-shrink-0"><i class="ph ph-users-three"></i></span>
                                                <div>
                                                    <h4 class="mb-0">289k</h4>
                                                    <span class="fw-medium text-info-600">Following</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-6 col-md-4 col-sm-6">
                                            <div class="statistics-card p-xl-4 p-16 flex-align gap-10 rounded-8 bg-purple-50">
                                                <span class="text-white bg-purple-600 w-36 h-36 rounded-circle flex-center text-xl flex-shrink-0"><i class="ph ph-thumbs-up"></i></span>
                                                <div>
                                                    <h4 class="mb-0">1256k</h4>
                                                    <span class="fw-medium text-purple-600">Likes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-24">
                                        <div class="flex-align gap-8 flex-wrap mb-16">
                                            <span class="flex-center w-36 h-36 text-main-600 bg-main-100 rounded-circle text-xl"> 
                                                <i class="ph ph-phone"></i>
                                            </span>
                                            <div class="flex-align gap-8 flex-wrap text-gray-600">
                                                <span>+00 123 456 789</span>
                                                <span>+00 123 456 789</span>
                                            </div>
                                        </div>
                                        <div class="flex-align gap-8 flex-wrap mb-16">
                                            <span class="flex-center w-36 h-36 text-main-600 bg-main-100 rounded-circle text-xl"> 
                                                <i class="ph ph-envelope-simple"></i>
                                            </span>
                                            <div class="flex-align gap-8 flex-wrap text-gray-600">
                                                <span>exampleinfo1@mail.com,</span>
                                                <span>exampleinfo2@mail.com</span>
                                            </div>
                                        </div>
                                        <div class="flex-align gap-8 flex-wrap mb-16">
                                            <span class="flex-center w-36 h-36 text-main-600 bg-main-100 rounded-circle text-xl"> 
                                                <i class="ph ph-map-pin"></i>
                                            </span>
                                            <div class="flex-align gap-8 flex-wrap text-gray-600">
                                                <span>Inner Circular Road, New York City, 0123</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-24">
                                <div class="card-body">
                                    <h6 class="mb-12">About Me</h6>
                                    <div class="recent-post rounded-8 border border-gray-100 p-16 d-flex gap-12 mb-16">
                                        <div class="d-inline-flex w-100 max-w-130 flex-shrink-0">
                                            <img src="https://dummyimage.com/130x130/919191/ffffff.png" alt="" class="rounded-6 cover-img max-w-130"/>
                                        </div>
                                        <div>
                                            <p class="text-gray-600 text-line-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa tellus ac augue. Lectus arcu at in in rhoncus malesuada ipsum turpis.</p>
                                            <div class="flex-align gap-8 mt-24">
                                                <img src="https://dummyimage.com/130x130/919191/ffffff.png" alt="" class="w-32 h-32 rounded-circle cover-img"/>
                                                <span class="text-gray-600 text-13">Michel Bruice</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="recent-post rounded-8 border border-gray-100 p-16 d-flex gap-12 mb-16">
                                        <div class="d-inline-flex w-100 max-w-130 flex-shrink-0">
                                            <img src="https://dummyimage.com/130x130/919191/ffffff.png" alt="" class="rounded-6 cover-img max-w-130"/>
                                        </div>
                                        <div>
                                            <p class="text-gray-600 text-line-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa tellus ac augue. Lectus arcu at in in rhoncus malesuada ipsum turpis.</p>
                                            <div class="flex-align gap-8 mt-24">
                                                <img src="https://dummyimage.com/130x130/919191/ffffff.png" alt="" class="w-32 h-32 rounded-circle cover-img"/>
                                                <span class="text-gray-600 text-13">Sara Smith</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h6 class="mb-12 mt-24">Add New Post</h6>
                                    <div class="editor style-two">
                                        <div id="editorTwo">
                                            <p>Write something new...</p>
                                        </div>
                                    </div>

                                    <div class="flex-between flex-wrap gap-8 mt-24">
                                        <div class="flex-align flex-wrap gap-8">
                                            <button type="button" class="flex-center w-26 h-26 text-gray-600 bg-gray-50 hover-bg-gray-100 rounded-circle text-md"> 
                                                <i class="ph ph-smiley"></i>
                                            </button>
                                            <button type="button" class="flex-center w-26 h-26 text-gray-600 bg-gray-50 hover-bg-gray-100 rounded-circle text-md"> 
                                                <i class="ph ph-camera"></i>
                                            </button>
                                            <button type="button" class="flex-center w-26 h-26 text-gray-600 bg-gray-50 hover-bg-gray-100 rounded-circle text-md"> 
                                                <i class="ph ph-image"></i>
                                            </button>
                                            <button type="button" class="flex-center w-26 h-26 text-gray-600 bg-gray-50 hover-bg-gray-100 rounded-circle text-md"> 
                                                <i class="ph ph-video-camera"></i>
                                            </button>
                                            <button type="button" class="flex-center w-26 h-26 text-gray-600 bg-gray-50 hover-bg-gray-100 rounded-circle text-md"> 
                                                <i class="ph ph-google-drive-logo"></i>
                                            </button>
                                        </div>
                                        <button type="submit" class="btn btn-main rounded-pill py-9"> Post Now</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === "password" ? "show active" : ""}`}>
                <div class="card mt-24">
                        <div class="card-header border-bottom">
                            <h4 class="mb-4">Password Settings</h4>
                            <p class="text-gray-600 text-15">Please fill full details about yourself</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <form action="#">
                                        <div class="row gy-4">
                                            <div class="col-12">
                                                <label for="current-password" class="form-label mb-8 h6">Current Password</label>
                                                <div class="position-relative">
                                                    <input type="password" class="form-control py-11" id="current-password" placeholder="Enter Current Password"/>
                                                    <span class="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph ph-eye-slash" id="#current-password"></span>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="new-password" class="form-label mb-8 h6">New Password</label>
                                                <div class="position-relative">
                                                    <input type="password" class="form-control py-11" id="new-password" placeholder="Enter New Password"/>
                                                    <span class="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph ph-eye-slash" id="#new-password"></span>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="confirm-password" class="form-label mb-8 h6">Confirm Password</label>
                                                <div class="position-relative">
                                                    <input type="password" class="form-control py-11" id="confirm-password" placeholder="Enter Confirm Password"/>
                                                    <span class="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph ph-eye-slash" id="#confirm-password"></span>
                                                </div>
                                            </div>
                                            {/* <div class="col-12">
                                                <label class="form-label mb-8 h6">Password Requirements:</label>
                                                <ul class="list-inside">
                                                    <li class="text-gray-600 mb-4">At least one lowercase character</li>
                                                    <li class="text-gray-600 mb-4">Minimum 8 characters long - the more, the better</li>
                                                    <li class="text-gray-300 mb-4">At least one number, symbol, or whitespace character</li>
                                                </ul>
                                            </div> */}
                                            {/* <div class="col-12">
                                                <label class="form-label mb-8 h6">Two-Step Verification</label>
                                                <ul>
                                                    <li class="text-gray-600 mb-4 fw-semibold">Two-factor authentication is not enabled yet.</li>
                                                    <li class="text-gray-600 mb-4 fw-medium">Two-factor authentication adds a layer of security to your account by requiring more than just a password to log in. Learn more.</li>
                                                </ul>
                                                <button type="submit" class="btn btn-main rounded-pill py-9 mt-24">Enable two-factor authentication</button>
                                            </div> */}
                                        </div>
                                    </form>
                                </div>
                                <div class="col-12">
                                    <div class="flex-align justify-content-end gap-8">
                                        <button type="reset" class="btn btn-outline-main bg-main-100 border-main-100 text-main-600 rounded-pill py-9">Cancel</button>
                                        <button type="submit" class="btn btn-main rounded-pill py-9">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Setting;
