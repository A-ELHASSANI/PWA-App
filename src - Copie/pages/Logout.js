import  { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {

 const navigate = useNavigate();

 useEffect(() => {

  console.log( localStorage.getItem('token'));
  localStorage.removeItem('token');
   navigate('/');

});

};

export default Logout;
