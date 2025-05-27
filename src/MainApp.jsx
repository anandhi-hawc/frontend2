import {Routes  , Route } from "react-router-dom";
import AdminApp from "./Admin/AppBackEnd";
import FrontendApp from "./FrontEnd/AppFront";

function MainApp() {
  
  return (
  
 
      <Routes>
        {/* Admin Panel */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* Frontend */}
        <Route path="/*" element={<FrontendApp />}/>
      </Routes>

  
  );
}

export default MainApp;
