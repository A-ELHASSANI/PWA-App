import {    Routes,  Route} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
   
      <Routes>
          <Route exact path="/" element={<Login/>}/>
         <Route exact path="/Dashboard" element={<Dashboard/>}/>
           {/* <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
          <Route exact path="/record/:user" element={<Record/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>


    
  );
}

export default App;
