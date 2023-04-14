import  { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';


const TestLogin = () => {

 const navigate = useNavigate();

 useEffect(() => {

console.log(localStorage.getItem('token'))
  if(localStorage.getItem('token') == null){
       console.log("test login logout.js")
       navigate('/');
     }else{
      navigate('/Dashboard');
     }


});

};

export default TestLogin;
