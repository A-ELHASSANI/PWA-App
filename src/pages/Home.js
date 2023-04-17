import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
 
   return (
     
 <div className="p-4 sm:ml-64">
  <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
 
     
     <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded bg-yellow-200 h-28 dark:bg-gray-800">
           <p className="text-2xl text-gray-400 dark:text-gray-500">
           <Link to="/Profil" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >
           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
           <span className="ml-3">  État civil </span> </Link>
           </p>
        </div>
        <div className="flex items-center justify-center rounded bg-lime-500 h-28 dark:bg-gray-800">
           <p className="text-2xl text-gray-400 dark:text-gray-500">
             
           <Link to="/Salaires" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >Salaires</Link>
           </p>
        </div>
        <div className="flex items-center justify-center rounded bg-blue-500 h-28 dark:bg-gray-800">
           <p className="text-2xl text-gray-400 dark:text-gray-500">
             
           <Link to="/Cnss" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >CNSS</Link>
           </p>
        </div>
        <div className="flex items-center justify-center rounded bg-red-500 h-28 dark:bg-gray-800">
           <p className="text-2xl text-gray-400 dark:text-gray-500">
           <Link to="/Missions" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >Missions</Link>
 
           </p>
        </div>
     </div>
     
  </div>
 </div>
   )
 
 }
export default Home

