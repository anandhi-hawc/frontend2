import axios from "axios"
import {getUserData, removeUserdata, storeUsageData} from './Storage'
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://lms.hawc.in"; // Update to your API URL
axios.defaults.withCredentials = true; // Only if using cookies (e.g., Laravel Sanctum)
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common['X-CSRF-TOKEN'] = true;

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

const API_BASE_URL = "http://lms.hawc.in"; // Replace with your real base URL


const REGISTER_URL=`api/register/student`
const LECTURER_REGISTER_URL=`api/register/lecturer`
const LOGIN_URL=`api/login`
const USER_DETAILS_URL=`api/login`
const LOGOUT_URL=`api/logout`

export  const RegisterApi =async (formData)=>
{
    
try {
    const response = await axios.post(REGISTER_URL,formData);
    
  storeUsageData(response);
                console.log(response);
                alert("redirect dashboard")
                // navigate('/admin');
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
// let data ={
//    name: formData.first_name,
//           email: formData.student_email,
//           mobile: formData.student_mobile,
//           password: formData.student_pwd,
//            password_confirmation: formData.student_pwd_confrim,
//           id_number: formData.student_idnumber,
//           gender_id: formData.select_gender,
// }
// await  axios.get("http://lms.hawc.in/sanctum/csrf-cookie");
// return   axios.post(REGISTER_URL,data);
}

export  const LecturerRegisterApi =async (formData)=>
{
    
try {
    const response = await axios.post(LECTURER_REGISTER_URL,formData);
    
  storeUsageData(response);
                console.log(response);
                alert("redirect dashboard")
                // navigate('/admin');
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }

}
export  const LoginApi =async (form)=>
{
try{
  
   const response = await axios.post(LOGIN_URL,form);
     storeUsageData(response);
        console.log(response);
     
} catch(error) {
throw error.response?.data || error;
}
}


// export const login = async (form) => {
//   try {
//     axios.get("/sanctum/csrf-cookie"); 
//     const response = await axios.post('http://lms.hawc.in/api/login', form);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };




export const UserDetailsApi =()=>
{
let data={token:getUserData()}
return axios.get(USER_DETAILS_URL,data)
}
export const logout = async () => {
    let data={token:removeUserdata()}
return axios.post(LOGOUT_URL,data )

};