import React, { Component ,  useEffect , useState } from 'react'
import axios from 'axios';
import { _URL_ , _TestLogin_ } from '..';
import { Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {
        nom :"",
        prenom :"",
        email :""
      }
    }
  }
  
  

  componentDidMount() {
  this.getUser();
    console.log("componentDidMount dashbord")
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


    console.log("render dashbord")

    return (
      <>
       {/* { ! _TestLogin_ && <Navigate to="/"  />} */}
      
    <p>{this.state.user.nom}</p>
    <p>{this.state.user.prenom}</p>
      <Navbar user={this.state.user}/>
      <Home user={this.state.user}/>
    </>
    )
  }
}


