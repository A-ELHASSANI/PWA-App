import {    Routes,  Route} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Logout from "./pages/Logout";
import Dashboard from './pages/Dashboard';
import Profil from "./pages/Profil";

function App() {

  return (
   
      <Routes>
          <Route exact path="/" element={<Login/>}/>
         <Route exact path="/Dashboard" element={<Dashboard/>}/>
            <Route exact path="/Logout" element={<Logout/>}/>
            <Route exact path="/Profil" element={<Profil/>}/>
          {/* <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
          <Route exact path="/record/:user" element={<Record/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>


    
  );
}

export default App;
