import React, { Component } from 'react'
import axios from 'axios';
import { _URL_ , _TestLogin_ } from '..';
class Missions extends Component {
    constructor(props) {
        super(props);
       this.state = {
        missions :[]
       }
    }

    
  componentDidMount() {

   if(_TestLogin_){

    axios.post(_URL_+'mission.php', {
        jwt:  localStorage.getItem('token'),
        action : 'missions_list'
      }
      ).then((response) => {
        if( response.data.res){
           this.setState({ missions: response.data.res});
     
        }
     }); 

    }

    }

  render() {
    const  List = this.state.missions
   

     
    const   Listnew = Object.values(List);
        const listItems =  Listnew.map((c , keyetime) =>
             
                    <div key={keyetime} className=" pt-5 mb-5">
                        <ul className="flex flex-col justify-between">
                                    <li className=" text-xl p-2 flex justify-between"> 
                                         <span className=" font-bold mr-10"> 
                                         Agence
                                         </span>
                                        <span>
                                            {c.agence}

                                        </span>
                                          
                                          </li>
                                                <li className=" text-xl p-2 flex justify-between"> 
                                         <span className=" font-bold mr-10"> 
                                         Avenant	N° de contrat
                                         </span>
                                        <span>
                                            {c.periode_mois}

                                        </span>
                                          
                                          </li>
                                    <li className=" text-xl p-2 flex justify-between" >
                                    <span className=" font-bold mr-10"> 
                                    Avenant	N° de contrat
                                    </span>
                                    <span>
                                         {c.sum_j}

                                    </span>
                                      </li>
                              

                                 <li className=" text-xl p-2 flex justify-between" >
                                    <span className=" font-bold mr-10"> 
                                    Qualification	
                                    </span>
                                    <span>
                                         {c.sum_net}

                                    </span>
                                </li>

                                 <li className=" text-xl p-2 flex justify-between" >
                                    <span className=" font-bold mr-10"> 
                                    Date de début de mission	
                                                                        </span>
                                    <span>
                                         {c.sum_soumis}

                                    </span>
                                </li>
                                 <li className=" text-xl p-2 flex justify-between" >
                                    <span className=" font-bold mr-10"> 
                                    Date de fin réelle de mission	
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

export default Missions
