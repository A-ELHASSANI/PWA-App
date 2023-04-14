import React  , {Component} from "react";
import axios from 'axios';
import { _URL_ , _TestLogin_ } from '..';

class Cnss extends Component {
    constructor(props) {
        super(props);
       this.state = {
        cnss :[]
       }
    }

    
  componentDidMount() {
    console.log(' componentDidMount : cnssList');

   if(_TestLogin_){

    axios.post(_URL_+'cnss.php', {
        jwt:  localStorage.getItem('token'),
        action : 'declarationsCnss'
      }
      ).then((response) => {
        if( response.data.res){
           this.setState({ cnss: response.data.res});
     
        }
     }); 

    }

    }


   

    render() { 
       const  cnssList = this.state.cnss
   

     
            const   cnssListnew = Object.values(cnssList);
                const listItems =  cnssListnew.map((c , keyetime) =>
                     
                            <div key={keyetime} className=" pt-5 mb-5">
                                <ul className="flex flex-col justify-between">
                                            <li className=" text-xl p-2 flex justify-between"> 
                                                 <span className=" font-bold mr-10"> 
                                                    Mois/Année	
                                                 </span>
                                                <span>
                                                    {c.periode_mois}

                                                </span>
                                                  
                                                  </li>
                                            <li className=" text-xl p-2 flex justify-between" >
                                            <span className=" font-bold mr-10"> 
                                            Nombre de jours	
                                            </span>
                                            <span>
                                                 {c.sum_j}

                                            </span>
                                              </li>
                                      

                                         <li className=" text-xl p-2 flex justify-between" >
                                            <span className=" font-bold mr-10"> 
                                            Salaire net		
                                            </span>
                                            <span>
                                                 {c.sum_net}

                                            </span>
                                        </li>

                                         <li className=" text-xl p-2 flex justify-between" >
                                            <span className=" font-bold mr-10"> 
                                            Salaire soumis	
                                            </span>
                                            <span>
                                                 {c.sum_soumis}

                                            </span>
                                        </li>
                                         <li className=" text-xl p-2 flex justify-between" >
                                            <span className=" font-bold mr-10"> 
                                            Solde brut global
                                            </span>
                                            <span>
                                                 {c.sum_sbg}

                                            </span>
                                        </li>
                                  </ul>
                               
                            </div>
                     
            );

        return ( 
        
                    <div className="p-4 sm:ml-64">
                        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                            {/* <h2>  Cnss  </h2> */}
                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <div  className="min-w-full divide-y divide-gray-200">
                               
                                     {listItems}

                                   
                                 </div>
                            </div>
                        </div>
                    </div>

                
                    );
    }
}
 
export default Cnss;