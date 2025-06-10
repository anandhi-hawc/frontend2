import React, { useState } from 'react';
import axios from 'axios';
import logo from '../FrontEnd/assets/img/logo.png';
import { Link ,useNavigate } from 'react-router-dom';
import { RegisterApi } from '../services/Api';
import front_style from "../FrontEnd/assets/css/front_style.module.css";
import "../FrontEnd/assets/css/front_style.module.css";
export default function Register() {
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    student_email: "",
    student_mobile: "",
    student_pwd: "",
    student_pwd_confrim: "",
    student_idnumber: "",
    select_gender: "",
    select_board: "",
    select_class: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const regex = {
    first_name: /^.{6,}$/, // 3–16 chars, letters, numbers, underscore
    last_name: /^.{6,}$/,
    student_email: /^\S+@\S+\.\S+$/, 
    student_mobile: /^.{6,}$/,
    student_pwd: /^.{6,}$/,
    student_idnumber:/^.{3,}$/,
  };

  const validate = () => {
    const newErrors = {};
    if (formData.first_name === "") {
      newErrors.first_name = "First name required"
    }
    else if (!regex.first_name.test(formData.first_name)) {
      newErrors.first_name = "First name must be 6 characters (no spaces)";
    }
    if (formData.last_name === "") {
      newErrors.last_name = "Last name required"
    }
    else if (!regex.last_name.test(formData.last_name)) {
      newErrors.last_name = "Last name must be 6 characters (no spaces)";
    }
     if(formData.student_email===""){
      newErrors.student_email="Email required"
    }
    else if (!regex.student_email.test(formData.student_email)) {
      newErrors.student_email = "Email invalid";
    }
     if(formData.student_mobile===""){
      newErrors.student_mobile="Mobile required"
    }
    else if (!regex.student_mobile.test(formData.student_mobile)) {
      newErrors.student_mobile = "Must 10 digit";
    }
    //  if (formData.student_pwd==="") {
    //   newErrors.student_pwd = "Password must be at least 10 characters";
    // }
    // else if(!regex.student_pwd.test(formData.student_pwd)){
    //   newErrors.student_pwd = "Must 10 digit";
    // }
    if (formData.student_pwd === "") {
  newErrors.student_pwd = "Password must be at least 10 characters";
} else if (!regex.student_pwd.test(formData.student_pwd)) {
  newErrors.student_pwd = "Password must be at least 10 characters";
}

if (formData.student_pwd_confrim === "") {
  newErrors.student_pwd_confrim = "Confirm your password";
} else if (formData.student_pwd !== formData.student_pwd_confrim) {
  newErrors.student_pwd_confrim = "Passwords do not match";
}

   if (formData.student_idnumber==="") {
      newErrors.student_idnumber = "Id number required";
    }
    else if(!regex.student_idnumber.test(formData.student_idnumber)){
      newErrors.student_idnumber = "Must 10 digit";
    }
   if (formData.select_gender==="") {
      newErrors.select_gender = "Gender required";
    }  
   
    if (formData.select_class==="") {
      newErrors.select_class = "Class required";
    }
    if (formData.select_board==="") {
      newErrors.select_board = "Board required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   if(!validate()) return
    setIsLoading(true);
    try {
      let data = {
        name: formData.first_name,
        email: formData.student_email,
        // mobile: formData.student_mobile,
        password: formData.student_pwd,
        password_confirmation: formData.student_pwd_confrim,
        // id_number: formData.student_idnumber,
        // gender_id: formData.select_gender,
      }
      // Replace with your actual backend API URL
      const response = await RegisterApi(data);
      setMessage('Registered successfully!');
       navigate('/admin/dashboard'); 
      console.log(response.data);
    } catch (error) {
      setMessage('Registration failed.');
      console.error(error);
    }  finally {
    setIsLoading(false); // 🔁 Hide loader
  }
  };

  return (
     <div className={front_style.frontend_bg}> 
    <section className=" py-3 py-md-5 py-xl-8 frontend_style">
{isLoading && (
  <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75" style={{ zIndex: 1050 }}>
    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)}

      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-md-6 col-xl-7">
            <div className="d-flex justify-content-center">
              <div className="col-12 col-xl-9">
                <img className="img-fluid rounded m-auto d-block" loading="lazy" src={logo} width="245" height="80" alt="HAWC Logo" />
                <hr className="border-primary-subtle mb-4" />
                <h2 className="h1 mb-4 text-white">We make digital products that drive you to stand out.</h2>
                <p className="lead mb-5 text-white">We write words, take photos, make videos, and interact with artificial intelligence.</p>
                <div className="text-endx text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                    <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="card border-0 rounded-4">
              <div className="card-body  p-md-4 p-xl-3">
                <div className="mb-4">
                  <h3>Sign up</h3>
                  <p>Already on HAWC?
                    <Link to="/login">Login</Link>
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 ">
                  <div className="row gy-3 overflow-hidden mt-3 register_form">
                    <div className="col-6 mt-1">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="first_name" placeholder="First Name"
                          value={formData.first_name} onChange={handleChange} />
                        <label className="form-label">First name</label>
                        <div style={{ color: "red" }}>{errors.first_name}</div>
                      </div>
                    </div>
                    <div className="col-6 mt-1">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="last_name" placeholder="Last Name"
                          value={formData.last_name} onChange={handleChange} />
                        <label className="form-label">Last Name</label>
                        <div style={{ color: "red" }}>{errors.last_name}</div>
                      </div>
                    </div>
                    <div className="col-6 mt-1">
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="student_email" placeholder="Last Name"
                          value={formData.student_email} onChange={handleChange} />
                        <label className="form-label">E-mail</label>
                        <div style={{ color: "red" }}>{errors.student_email}</div>
                      </div>
                    </div>
                    <div className="col-6 mt-1">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="student_mobile" placeholder="Mobile Number"
                          value={formData.student_mobile} onChange={handleChange} />
                        <label className="form-label">Mobile Number</label>
                        <div style={{ color: "red" }}>{errors.student_mobile}</div>
                      </div>
                    </div>
                     <div className="col-12 mb-3 mt-0">
                        <div className="input-group">
                          <div className="form-floating">
                            <input type="password" className="form-control border-end-0" name="student_pwd" placeholder="Enter Password"
                             value={formData.student_pwd} onChange={handleChange} />
                            <label> Password</label>
                            <div style={{ color: "red" }}>{errors.student_pwd}</div>                             
                          </div>
                          <div className="input-group-text border-start-0 bg-white">
                            <button type="button" className="btn border-0 btn-toggle-password-visibility"></button>
                          </div>
                        </div>
                        <div className="col-auto">
                          <span id="passwordHelpInline" className="form-text">
                            Must be 10 characters long.
                          </span>
                        </div>
                      </div>

                      <div className="col-12 mb-3 mt-0">
                        <div className="input-group">
                          <div className="form-floating">
                            <input type="password" className="form-control border-end-0" name="student_pwd_confrim" placeholder="Enter Password"
                             value={formData.student_pwd_confrim} onChange={handleChange} />
                            <label> Password Confirmation</label>
                            <div style={{ color: "red" }}>{errors.student_pwd_confrim}</div>                             
                          </div>
                          <div className="input-group-text border-start-0 bg-white">
                            <button type="button" className="btn border-0 btn-toggle-password-visibility"></button>
                          </div>
                        </div>
                      </div>
                     <div className="col-12 mb-3 mt-0">
                        <div className="input-group">
                          <div className="form-floating">
                            <input type="password" className="form-control border-end-0" name="student_idnumber" placeholder="Enter Password"
                             value={formData.student_idnumber} onChange={handleChange} />
                            <label> Id number</label>
                            <div style={{ color: "red" }}>{errors.student_idnumber}</div>                             
                          </div>
                        </div>
                      </div>
                        <div className="col-6 mt-0">
                        <div className="form-floating mb-3">
                          <select className="form-select pt-1 " name="select_gender" 
                         value={formData.select_gender} onChange={handleChange}>
                            <option> Select gender </option>
                            <option value="0">female</option>
                            <option value="1">male</option>
                          </select>
                          <div style={{ color: "red" }}>{errors.select_gender}</div>                          
                        </div>
                      </div>
                      <div className="col-6 mt-0">
                        <div className="form-floating mb-3">
                          <select className="form-select pt-1 " name="select_board" 
                         value={formData.select_board} onChange={handleChange}>
                            <option> Select Board </option>
                            <option>CBSE</option>
                            <option>ICSE</option>
                          </select>
                          <div style={{ color: "red" }}>{errors.select_board}</div>                          
                        </div>
                      </div>
                       <div className="col-6 mt-0">
                        <div className="form-floating mb-3">
                          <select className="form-select pt-1" name="select_class" 
                          value={formData.select_class} onChange={handleChange}>
                            <option> Select Class </option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                          </select>
                          <div style={{ color: "red" }}>{errors.select_class}</div>                          
                        </div>
                      </div>
                      <div className="col-12 mt-0">
                        <div className="custom-control custom-checkbox d-flex align-items-baseline">
                          <input type="checkbox" defaultChecked className="custom-control-input" id="customCheck" name="example1" />
                          <label className="custom-control-label ms-1" htmlFor="customCheck"> By continuing, I agree to <a href="#!">
                            Terms & Conditions</a> & <a href="#!">privacy policy</a>.</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-grid">
                          {/* <div className="form-group">
                                    {
                                        errors.customerror ?
                                            (<span className="text-danger"  >
                                                <p>{errors.customerror}</p>
                                            </span>) : null
                                    }
                                    {loading ?
                                        (<div className="text-center">
                                            <div className="spinner-border text-primary " role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>) : null
                                    }
                             <input className="btn btn-primary btn-lg text-white" type="submit" disabled={loading} value="Sign up" />
                                </div> */}
                                <input className="btn btn-primary btn-lg text-white" type="submit" value="Sign up" />
                        </div>
                      </div>
                  </div>
                </form>
                {message && <p className="mt-4 text-center">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

  );
};


