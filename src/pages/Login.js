import React, { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { _URL_ , _TestLogin_ } from '..';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 const navigate = useNavigate();

 useEffect(() => {
 if(_TestLogin_ == null){
console.log('is not login')
 }else{
   navigate('/dashboard');
   console.log('is login')
 }
});


const handleSubmit = async (event) => {
  event.preventDefault();
  axios.post(_URL_+'login.php', {
    txt_identifiant: email,
    txt_password: password,
  }
  ).then((response) => {
    if( response.data.jwt){
      localStorage.setItem('token', response.data.jwt);
      navigate('/dashboard');
    }else{
     // console.log(response.data)
      setError(response.data.message);
    }
    
  });


};

  return (
    <>
       <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
     <div className="relative py-3 sm:max-w-xl sm:mx-auto">
       <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
         <div className="max-w-md mx-auto">
           <div className="flex items-center space-x-5">
            
             <div className="text-gray-700">
               <h1 className="text-2xl font-medium">Connexion</h1>
               <p>Connectez-vous à votre compte pour accéder à votre tableau de bord.</p>
             </div>
           </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="absolute  text-gray-500 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-indigo-500 transition-all"  >Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"

        />
      </div>
      <div>
        <label htmlFor="password" className="absolute  text-gray-500 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-indigo-500 transition-all" >Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"

        />
      </div>

      {error && <p className="mt-7 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" >
        {error}
        </p>}
   
      <div className="mt-7">
               <button className="bg-indigo-500 text-white py-2 px-5 rounded-md hover:bg-indigo-600 transition duration-200" type="submit">
                 Se connecter
               </button>
             </div>
    </form>
    </div>
       </div>
     </div>
   </div>
   
 
</>
  );
};

export default Login;
