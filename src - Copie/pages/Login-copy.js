import React, { useState } from 'react';


//import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { _URL_ } from '..';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const navigate = useNavigate();

/*
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(_URL_, {
        email: email,
        password: password,
      });
      console.log(response);
    //  localStorage.setItem('token', response.data.token);
      //navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };
  */

const handleSubmit = async (event) => {
  event.preventDefault();
  const response = await fetch(_URL_, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (response) {
   // const { token } = await response.json();
  //  localStorage.setItem('token', token);
 // navigate('/dashboard');
   console.log(response.json());
  }else{

  }
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
        <label htmlFor="email" className="absolute  text-gray-500 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-indigo-500 transition-all" >Email</label>
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
   
     {/* <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
     <div className="relative py-3 sm:max-w-xl sm:mx-auto">
       <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
         <div className="max-w-md mx-auto">
           <div className="flex items-center space-x-5">
            
             <div className="text-gray-700">
               <h1 className="text-2xl font-medium">Connexion</h1>
               <p>Connectez-vous à votre compte pour accéder à votre tableau de bord.</p>
             </div>
           </div>
           <form className="mt-7" onSubmit={handleSubmit}>
             <div className="relative">
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder=" "
                 required
                 className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"
               />
               <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-indigo-500 transition-all">
                 Adresse e-mail
               </label>
             </div>
             <div className="mt-7 relative">
               <input
                 type="password"
                 id="password"
                 name="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder=" "
                 required
                 className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"
               />
               <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-500 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-indigo-500 transition-all">
                 Mot de passe
               </label>
             </div>
             <div className="mt-7">
               <button className="bg-indigo-500 text-white py-2 px-5 rounded-md hover:bg-indigo-600 transition duration-200" type="submit">
                 Se connecter
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div> */}
</>
  );
};

export default Login;
