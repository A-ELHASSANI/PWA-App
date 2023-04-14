import React, { Component ,  useEffect , useState } from 'react'
import axios from 'axios';
import { _URL_ , _TestLogin_ } from '..';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import Navbar from './Navbar';
import Home from './Home';

export default class Dashboard extends Component {



  render() {


    console.log("render dashbord")
    console.log(localStorage.getItem('token'))

    return (
      <>
        { ! localStorage.getItem('token') && <Navigate to="/"  />} 
      <Home user={this.props.user}/> 
    </>
    )
  }
}




