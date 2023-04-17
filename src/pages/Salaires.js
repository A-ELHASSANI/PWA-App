import React  , {Component} from "react";
import axios from 'axios';
import { _URL_ , _TestLogin_ } from '..';

class Salaires extends Component {
    constructor(props) {
        super(props);
       this.state = {
        bulletinpaie :[]
       }
    }

    
  componentDidMount() {

   if(_TestLogin_){

    axios.post(_URL_+'bulletinpaie_paie.php', {
        jwt:  localStorage.getItem('token'),
        action : 'bulletinpaie_paie_list'
      }
      ).then((response) => {
        if( response.data.res){
           this.setState({ bulletinpaie: response.data.res});
     
        }
     }); 

    }

    }


   

    render() { 
       const  List = this.state.bulletinpaie
   

     
            const   Listnew = Object.values(List);
                const listItems =  Listnew.map((c , keyetime) =>
                <div key={keyetime} className=" pt-5 mb-5">
                <ul className="flex flex-col justify-between">
                            <li className=" text-xl p-2 flex justify-between"> 
                                 <span className=" font-bold mr-10"> 
                                    Date	
                                 </span>
                                <span>
                                    {c.date}

                                </span>
                                  
                                  </li>
                            <li className=" text-xl p-2 flex justify-between" >
                            <span className=" font-bold mr-10"> 
                            Date génération	
                            </span>
                            <span>
                                 {c.dateGen}

                            </span>
                              </li>
                      

                         <li className=" text-xl p-2 flex justify-between" >
                            <span className=" font-bold mr-10"> 
                            Type		
                            </span>
                            <span>
                                 {c.type}

                            </span>
                        </li>

                         <li className=" text-xl p-2 flex justify-between" >
                            <span className=" font-bold mr-10"> 
                            Rentabilité	
                            </span>
                            <span>
                                 {c.rentabilite}

                            </span>
                        </li>
                         <li className=" text-xl p-2 flex justify-between" >
                            <span className=" font-bold mr-10"> 
                            Net à payer
                            </span>
                            <span>
                                 {c.netPayer}

                            </span>
                        </li>
                  </ul>
               
            </div>
                
                     
            );

        return ( 
        
                    <div className="p-4 sm:ml-64">
                        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                          
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
 
export default Salaires;