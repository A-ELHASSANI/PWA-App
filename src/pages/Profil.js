import { Avatar, Typography, Button , Card } from "@material-tailwind/react";
import { useEffect , useState  } from 'react';


export function Profil(props) {
 const user = props.user
 console.log(user.nom) ;
  useEffect(() => {
    if(localStorage.getItem('token')){
  

    }
   })

  return (
    <>
       <section className="relative bg-blue-gray-50/50 py-16 px-4">
       <div className="container mx-auto">
       <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
 
              <table  className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-gray-50">

                <tr>
                  <th  scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Nom</th>
                  <td>{user.nom}</td>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Prenom</th>
                  <td>{user.prenom}</td>
                </tr> 

                <tr>
                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">CIN</th>
                  <td>{user.cin}</td>

                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">E-mail</th>
                  <td>{user.email}</td>
                </tr>

                <tr>

                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Date de naissance</th>
                  <td>{user.date_naissance}</td>  
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Num CNSS</th>
                  <td>{user.num_cnss}</td>

                  
                </tr>  
                
                 <tr>

                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">RIB</th>
                  <td>{user.rib}</td>  

                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Téléphone</th>
                  <td>{user.telephone}</td>

                  
                </tr>
                </tbody>

              </table>
              </div>
              </div>
              </div>
        </section>
    </>
  );
}

export default Profil;
