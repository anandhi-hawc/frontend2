import React, { useState } from 'react';
import axios from 'axios';
import logo from '../FrontEnd/assets/img/logo.png';
import { Link ,useNavigate } from 'react-router-dom';
import { LecturerRegisterApi, RegisterApi } from '../services/Api';
import front_style from "../FrontEnd/assets/css/front_style.module.css";
import "../FrontEnd/assets/css/front_style.module.css";
export default function Lecturer() {
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lecturer_name: "",
    lecturer_email: "",
    lecturer_pwd: "",
    lecturer_pwd_confrim: "",
    lecturer_mobile: "",
    lecturer_desc: "",
    experience: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const regex = {
    lecturer_name: /^.{6,}$/, // 3–16 chars, letters, numbers, underscore
    lecturer_email: /^\S+@\S+\.\S+$/,
    lecturer_pwd: /^.{6,}$/,
    lecturer_pwd_confrim: /^.{6,}$/,
    lecturer_mobile: /^.{2,}$/,
    lecturer_desc: /^.{6,}$/,
    experience: /^.{2,}$/,
  };

  const validate = () => {
   const newErrors = {};
    if (formData.lecturer_name === "") {
      newErrors.lecturer_name = "lecturer name required"
    }
    else if (!regex.lecturer_name.test(formData.lecturer_name)) {
      newErrors.lecturer_name = " name must be 6 characters (no spaces)";
    }
    if (formData.lecturer_email === "") {
      newErrors.lecturer_email = "lecturer email required"
    }
    else if (!regex.lecturer_email.test(formData.lecturer_email)) {
      newErrors.lecturer_email = "Email invalid";
    }
    // if (form.lecturer_pwd === "") {
    //   newErrors.lecturer_pwd = "Password must be at least 10 characters"
    // }
    // else if (!regex.lecturer_pwd.test(form.lecturer_pwd)) {
    //   newErrors.lecturer_pwd = "atlease 10 digit";
    // }
      if (formData.lecturer_pwd === "") {
  newErrors.lecturer_pwd = "Password must be at least 10 characters";
} else if (!regex.lecturer_pwd.test(formData.lecturer_pwd)) {
  newErrors.lecturer_pwd = "Password must be at least 10 characters";
}

if (formData.lecturer_pwd_confrim === "") {
  newErrors.lecturer_pwd_confrim = "Confirm your password";
} else if (formData.lecturer_pwd !== formData.lecturer_pwd_confrim) {
  newErrors.lecturer_pwd_confrim = "Passwords do not match";
}
    if (formData.lecturer_mobile === "") {
      newErrors.lecturer_mobile = "Lecturer mobile required"
    }
    else if (!regex.lecturer_mobile.test(formData.lecturer_mobile)) {
      newErrors.lecturer_mobile = "atlease 10 digit";
    }
    if (formData.lecturer_desc === "") {
      newErrors.lecturer_desc = "Description required"
    }
    else if (!regex.lecturer_desc.test(formData.lecturer_desc)) {
      newErrors.lecturer_desc = "atlease 10 letters";
    }
    if (formData.experience === "") {
      newErrors.experience = "experience required"
    }
    else if (!regex.experience.test(formData.experience)) {
      newErrors.experience = "atlease 2 digit";
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
          name: formData.lecturer_name,
          email: formData.lecturer_email,
          password: formData.lecturer_pwd,
          password_confirmation: formData.lecturer_pwd_confrim,
          mobile: formData.lecturer_mobile,
          description: formData.lecturer_desc,
          experience: formData.experience,
         };
      // Replace with your actual backend API URL
      const response = await LecturerRegisterApi(data);
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
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-6 mt-1">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" name="lecturer_name" placeholder="Lecturer Name"
                            value={formData.lecturer_name} onChange={handleChange} />
                          <label className="form-label"> name</label>
                          <div style={{ color: "red" }}>{errors.lecturer_name}</div>
                        </div>
                      </div>
                      <div className="col-6 mt-0">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" name="lecturer_email" placeholder="name@example.com"
                            value={formData.lecturer_email} onChange={handleChange} />
                          <label className="form-label">Email</label>
                          <div style={{ color: "red" }}>{errors.lecturer_email}</div>
                        </div>
                      </div>
                      <div className="col-12 mb-3 mt-0">
                        <div className="input-group">
                          <div className="form-floating">
                            <input type="password" className="form-control border-end-0" name="lecturer_pwd" placeholder="Enter Password"
                              value={formData.lecturer_pwd} onChange={handleChange} />
                            <label> Password</label>
                            <div style={{ color: "red" }}>{errors.lecturer_pwd}</div>
                          </div>
                          <div className="input-group-text border-start-0 bg-white">
                            <button type="button" className="btn border-0 btn-toggle-password-visibility"></button>
                          </div>
                        </div>
                        <div className="col-auto">
                          <span id="passwordHelpInline" className="form-text">
                            Must be 8-20 characters long.
                          </span>
                        </div>
                      </div>

                      <div className="col-12 mb-3 mt-0">
                        <div className="input-group">
                          <div className="form-floating">
                            <input type="password" className="form-control border-end-0" name="lecturer_pwd_confrim" placeholder="Enter Password"
                              value={formData.lecturer_pwd_confrim} onChange={handleChange} />
                            <label> Password Confirmation</label>
                            <div style={{ color: "red" }}>{errors.lecturer_pwd_confrim}</div>
                          </div>
                          <div className="input-group-text border-start-0 bg-white">
                            <button type="button" className="btn border-0 btn-toggle-password-visibility"></button>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mt-0">
                        <div className="form-floating mb-3">
                          <input type="tel" className="form-control" name="lecturer_mobile" placeholder="Mobile number"
                            value={formData.lecturer_mobile} onChange={handleChange} />
                          <label className="form-label">Mobile Number</label>
                          <div style={{ color: "red" }}>{errors.lecturer_mobile}</div>
                        </div>
                      </div>

                      <div className="col-6 mt-0">
                        <div className="form-floating mb-3">
                          <textarea className="form-control" name="lecturer_desc" placeholder="Description"
                            value={formData.lecturer_desc} onChange={handleChange}
                          ></textarea>
                          <label className="form-label">Description</label>
                          <div style={{ color: "red" }}>{errors.lecturer_desc}</div>
                        </div>
                      </div>

                      <div className="col-12 mb-3 mt-0">
                        <div className="input-group">
                          <div className="form-floating">
                            <input type="text" className="form-control border-end-0" name="experience" placeholder="Enter experience"
                              value={formData.experience} onChange={handleChange} />
                            <label> Experience</label>
                            <div style={{ color: "red" }}>{errors.experience}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-0">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" />
                          <label className="custom-control-label" htmlFor="customCheck"> By continuing, I agree to <a href="#!">
                            Terms & Conditions</a> & <a href="#!">privacy policy</a>.</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn btn-primary btn-lg text-white" type="submit">Sign up</button>
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


