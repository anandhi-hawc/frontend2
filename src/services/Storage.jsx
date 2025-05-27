import { logout } from "./Auth";

export const storeUsageData = (response)=>{
   if (response && response.data && response.data.data) {
    const { token, name } = response.data.data;

    localStorage.setItem("user", JSON.stringify({ token, name }));
  } else {
    console.error("Invalid response format:", response.data.data);
  }
    }
    
    export const getUserData = ()=>
    {
  //  return localStorage.getItem('user');
   const user = localStorage.getItem("user");
   return user ? JSON.parse(user) : null;
    }
    export const removeUserdata= ()=>
    {
      
        localStorage.removeItem('user');
       window.location.href = '/login';
     
    }