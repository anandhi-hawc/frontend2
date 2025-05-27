import React, { useState } from "react";
import waveHand from '../assets/images/wave-hand.png';
import StarShape from '../assets/images/star-shape.png';
import Woman from '../assets/images/woman.png';
import Boy from '../assets/images/boy.png';
import Img1 from '../assets/images/img1.png';
import Img2 from '../assets/images/img2.png';
import { getUserData} from '../../services/Storage';

function Dashboard() {
 const user = getUserData();    

    const [activeTab, setActiveTab] = useState("home");
   
    return (



        <div className="dashboard-body">

            <div className="row gy-4">
                <div className="col-lg-12">


                    <div class="col-xxl-8">
                        <div class="card h-100">
                            <div class="card-body grettings-box-two position-relative z-1 p-0">
                                <div class="row align-items-center h-100">
                                    <div class="col-lg-6">
                                        <div class="grettings-box-two__content">
                                            <h2 class="fw-medium mb-0 flex-align gap-10">Hi, Mohib
                                                <img src={waveHand} alt="" /> </h2>
                                                  <h2>Welcome, {user?.name}</h2> 
                                            <h2 class="fw-medium mb-16">Effective, Engaging & Experienced Teaching</h2>
                                            <div class="event-container">
                                                <div class="event-info">
                                                    <div class="date-text">Sunday, May 11, 2025</div>
                                                    <div class="time-text">10:00 AM IST</div>
                                                </div>
                                                <label class="btn-register">Physics</label>
                                            </div>
                                            <a class="btn bg-brand rounded-pill mt-32">Join Now</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-md-block d-none ">
                                        <img className="banner_dahboard" src={Img1} alt="" />
                                    </div>
                                </div>
                                <img src={StarShape} class="position-absolute start-0 top-0 w-100 h-100 z-n1 
                            object-fit-contain" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card mt-24">
                        <div className="card-body">
                            <div className="mb-20 flex-between flex-wrap gap-8">
                                <h4 className="mb-0">Top Courses Pick for You</h4>
                                <a href="student-courses.html" className="text-13 fw-medium text-main-600 hover-text-decoration-underline">See All</a>
                            </div>
                            <div className="nav_tab_container">
                                <ul className="nav nav-pills common-tab gap-20 mb-3" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                                            onClick={() => setActiveTab("home")}
                                            type="button"
                                        >
                                            All
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                                            onClick={() => setActiveTab("profile")}
                                            type="button"
                                        >
                                            Completed
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
                                            onClick={() => setActiveTab("contact")}
                                            type="button"
                                        >
                                            Ongoing
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className={`tab-pane fade ${activeTab === "home" ? "show active" : ""}`}>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center">
                                                        <img src={Img2}
                                                            className="dashboard_card_img" alt="Course Image" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span className="text-13 py-2 px-10 rounded-pill bg-success-50 text-success-600 mb-16">Completed</span>
                                                        <h5 className="mb-0"><a  className="hover-text-main-600">Physics</a></h5>
                                                        <div className="flex-align gap-8 mt-12">
                                                    <span className="text-main-600 flex-shrink-0 text-13 fw-medium">32%</span>
                                                    <div className="progress w-100  bg-main-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar bg-main-600 rounded-pill progress_bar_level" ></div>
                                                    </div>
                                                </div>
                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src={Woman} className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by  <a  className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Parithosh</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center ">
                                                        <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b7a21950-e87b-11ef-bae1-3b054b69f2a5_uptor-data-science-english-thumbnail.jpg"
                                                            className="dashboard_card_img" alt="Course Image" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span className="text-13 py-2 px-10 rounded-pill bg-warning-50 text-warning-600 mb-16">Ongoing</span>
                                                        <h5 className="mb-0"><a href="course-details.html" className="hover-text-main-600">Chemistry</a></h5>
                                                        <div className="flex-align gap-8 mt-12">
                                                    <span className="text-main-600 flex-shrink-0 text-13 fw-medium">32%</span>
                                                    <div className="progress w-100  bg-main-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar bg-main-600 rounded-pill progress_bar_level" ></div>
                                                    </div>
                                                </div>
                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src={Boy} className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center">
                                                        <img src={Img1} alt="Course Image" className="dashboard_card_img" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span className="text-13 py-2 px-10 rounded-pill bg-warning-50 text-warning-600 mb-16">Ongoing</span>
                                                        <h5 className="mb-0"><a href="course-details.html" className="hover-text-main-600">Maths</a></h5>
                                                        <div className="flex-align gap-8 mt-12">
                                                    <span className="text-main-600 flex-shrink-0 text-13 fw-medium">32%</span>
                                                    <div className="progress w-100  bg-main-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar bg-main-600 rounded-pill progress_bar_level" ></div>
                                                    </div>
                                                </div>
                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src={Woman} className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${activeTab === "profile" ? "show active" : ""}`}>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html"
                                                        className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center">
                                                        <img src={Img2} className="dashboard_card_img" alt="Course Image" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span
                                                            className="text-13 py-2 px-10 rounded-pill bg-success-50 text-success-600 mb-16">Completed</span>
                                                        <h5 className="mb-0"><a href="course-details.html" className="hover-text-main-600">Physics</a></h5>
                                                        <div className="flex-align gap-8 mt-12">
                                                    <span className="text-main-600 flex-shrink-0 text-13 fw-medium">32%</span>
                                                    <div className="progress w-100  bg-main-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar bg-main-600 rounded-pill progress_bar_level" ></div>
                                                    </div>
                                                </div>
                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src={Woman} className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by <a href="profile.html"
                                                                    className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert
                                                                    James</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i
                                                                    className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html" className="btn btn-outline-main rounded-pill py-9">View
                                                                Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${activeTab === "contact" ? "show active" : ""}`}>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center ">
                                                        <img src="https://hubble.cdn.chittiapp.com/cdn_uploads/b7a21950-e87b-11ef-bae1-3b054b69f2a5_uptor-data-science-english-thumbnail.jpg"
                                                            className="dashboard_card_img" alt="Course Image" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span className="text-13 py-2 px-10 rounded-pill bg-warning-50 text-warning-600 mb-16">Ongoing</span>
                                                        <h5 className="mb-0"><a href="course-details.html" className="hover-text-main-600">Chemistry</a></h5>
                                                        <div className="flex-align gap-8 mt-12">
                                                    <span className="text-main-600 flex-shrink-0 text-13 fw-medium">32%</span>
                                                    <div className="progress w-100  bg-main-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar bg-main-600 rounded-pill progress_bar_level" ></div>
                                                    </div>
                                                </div>
                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src={Boy} className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center ">
                                                        <img src={Img2}
                                                            className="dashboard_card_img" alt="Course Image" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span className="text-13 py-2 px-10 rounded-pill bg-warning-50 text-warning-600 mb-16">Ongoing</span>
                                                        <h5 className="mb-0"><a href="course-details.html" className="hover-text-main-600">Chemistry</a></h5>
                                                        <div className="flex-align gap-8 mt-12">
                                                    <span className="text-main-600 flex-shrink-0 text-13 fw-medium">32%</span>
                                                    <div className="progress w-100  bg-main-100 rounded-pill h-8" role="progressbar" aria-label="Basic example" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar bg-main-600 rounded-pill progress_bar_level" ></div>
                                                    </div>
                                                </div>
                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src={Boy} className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>



            </div>
        </div>

    );
}

export default Dashboard;
