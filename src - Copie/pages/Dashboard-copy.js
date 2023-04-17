import React, { useEffect   } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {  _TestLogin_ } from '..';

  const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
  if(_TestLogin_ == null){
    console.log("test login dashbord")
    navigate('/');
  }
 })

    return (
      <>
      <div className=''>
         <Navbar/> 
        {console.log('apre navbar')}
        {/* <Home/>
        <Footer/> */}
      </div>
      </>
    )
  
}
export default Dashboard

