import {    Routes,  Route} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Logout from "./pages/Logout";
import Dashboard from './pages/Dashboard';
import Profil from "./pages/Profil";
import Navbar from "./pages/Navbar";
import { Component } from "react";
import { _TestLogin_  , _URL_} from ".";
import axios from 'axios';
import Salaires from "./pages/Salaires";
import Cnss from "./pages/Cnss";
import Missions from "./pages/Missions";
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {}
    }
  }
  

  componentDidMount() {
    if(localStorage.getItem('token')){
      console.log("componentDidMdddount app : "+ _TestLogin_)

      this.getUser();
    }

    }

    getUser = () =>{
    axios.post(_URL_+'validate_token.php', {
       jwt:  localStorage.getItem('token')
     }
     ).then((response) => {
       console.log(response.data.user)
       if( response.data.user){
          this.setState({ user: response.data.user });
    
       }
    }); 
   }
  render() {
  return (
   
    <>

      { localStorage.getItem('token') &&   <Navbar user={this.state.user} /> }
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/Dashboard" element={<Dashboard user={this.state.user} />}/>
            <Route exact path="/Logout" element={<Logout/>}/>
            <Route exact path="/Profil" element={<Profil user={this.state.user} />}/>
            <Route exact path="/Salaires" element={<Salaires />}/>
            <Route exact path="/Cnss" element={<Cnss />}/>
            <Route exact path="/Missions" element={<Missions />}/>
          {/* <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
          <Route exact path="/record/:user" element={<Record/>}/>
        <Route path="*" element={<NotFound/>}/> */}
        </Routes>
        </> 
     


    
  );
}

}

export default App;
