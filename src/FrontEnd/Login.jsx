
import React, { useEffect, useState } from 'react';
import { storeUsageData } from '../services/Storage';
import { isAuthenticated } from '../services/Auth';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import front_style from "../FrontEnd/assets/css/front_style.module.css";
import { LoginApi } from '../services/Api';
axios.defaults.baseURL = "http://lms.hawc.in/";
axios.defaults.withCredentials = true;
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
   const [form, setForm] = useState({
    email: "",
    password: ""
    });
     const [errors, setErrors] = useState({});
     const regex = {
      email: /^\S+@\S+\.\S+$/, // Simple email format
      password: /^.{6,}$/,
    };

    const validate = () => {
      const newErrors = {};
      if(form.email===""){
        newErrors.email="Email  required"
      }
      else if (!regex.email.test(form.email)) {
        newErrors.email = " Emai invalid";
      }
      if(form.password===""){
        newErrors.password="Password  required"
      }
      else if (!regex.password.test(form.password)) {
        newErrors.password = "Invalid Credential ";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: "" }); // Clear error
    };
    const handleSubmit = async  (e) => {
      e.preventDefault();
      if(!validate()) return
      setIsLoading(true);
        console.log("Submitted!", form);
         
          try {
  const response = await LoginApi(form);
  navigate('/admin/dashboard'); 
  
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials or server error");
    } finally {
    setIsLoading(false); // 🔁 Hide loader
  }
      
    }


//     useEffect(() => {
//   if (isAuthenticated()) {
//     navigate('/admin/dashboard');
//     window.location.reload();
//   }
// }, []);
    
    return (
       <div className={front_style.frontend_bg} style={{ height: '100vh' }}> 
       {isLoading && (
  <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75" style={{ zIndex: 1050 }}>
    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)}
      <section className=" py-3 py-md-5 py-xl-8">
    <div className="container">
      <div className="row gy-4 align-items-center">
        <div className="col-12 col-md-6 col-xl-7">
          <div className="d-flex justify-content-center">
            <div className="col-12 col-xl-9">
              <img className="img-fluid rounded mb-4" loading="lazy" src="https://res.cloudinary.com/ddgb1rumv/image/upload/v1718879813/Logomdpi_ewzvve.png" width="245" height="80" alt="BootstrapBrain Logo"/>
              <hr className="border-primary-subtle mb-4"/>
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
            <div className="card-body p-md-4 p-xl-5">
              <div className="row">
                <div className="col-12">
                  <div className="mb-4">
                    <h3>Sign in</h3>
                    <p>Don't have an account? 
                    <Link to="/studentregister">Sign Up</Link></p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 overflow-hidden">
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" name="email"  placeholder="name@example.com" 
                    value={form.email}   onChange={handleChange}/>
                      <label className="form-label">Email</label>
                      <div style={{ color: "red" }}>{errors.email}</div>
                    </div>
                     </div>

                  <div className="col-12 mb-3 mt-0">
                    <div className="input-group">
                      <div className="form-floating">
                        <input type="text" className="form-control" name="password" placeholder="Enter Password" 
                          value={form.password}   onChange={handleChange}/>
                        <label> Password</label>
                        <div style={{ color: "red" }}>{errors.password}</div>
                      </div>
                    </div>
                            
                  </div>
                  <div className="col-12 mt-0">
                  <div className="custom-control custom-checkbox">
                      
                      <input className="form-check-input" type="checkbox"  
                      defaultChecked  value="" name="remember_me" id="remember_me" 
                      />
                      <label className="form-check-label custom-control-label text-secondary ms-1" htmlFor="remember_me">
                        Keep me logged in
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                  {/* {
                                    loading ?
                                    ( <div className="spinner-border text-primary " role="status">
                                        <span className="sr-only">Loading...</span>
                                        </div>):null
                                } */}
                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg text-white" type="submit">Login</button>
                    </div>
                   
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                  
                    <Link to="/forgotpassword">Forgot password</Link>
                  </div>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}