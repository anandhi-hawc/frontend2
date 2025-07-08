import { logout } from "./Auth";

export const storeUsageData = (response) => {
  if (response && response.data && response.data.data) {
    const { token, name, role_name } = response.data.data;
    console.log("response data", response.data);
    localStorage.setItem("user", JSON.stringify({ token, name, role_name }));
  } else {
    console.error("Invalid response format:", response.data.data);
  }
}

export const getUserData = () => {
  //  return localStorage.getItem('user');
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}
export const getUserRole = () => {
  const user = getUserData();
  return user?.role_name || null;
};
export const removeUserdata = () => {

  localStorage.removeItem('user');
  window.location.href = '/login';

}