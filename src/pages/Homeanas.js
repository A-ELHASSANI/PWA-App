import React from 'react';
import { Link } from "react-router-dom"
  const Home = () => {
 
    return (
      
      <div className="p-6 sm:ml-64">
          <div className=" flex items-center justify-center p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-20">
            {/* <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div> */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"> */}
              <Link
                to="/Profil"
                class="block max-w-sm p-6 bg-white border border-gray-200 content-center	 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
               
                <h5 class="text-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Etat civil
                </h5>
                <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                  Voir mes cordonnées
                </p>
              </Link>
              {/* </div> */}
              {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"> */}
              <Link
                to="/Salaires"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Salaire
                </h5>
                <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                  Voir mes bulletin de paie.
                </p>
              </Link>
              {/* </div> */}
              {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"> */}
              <Link
                to="/Cnss"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl    text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  CNSS
                </h5>
                <p class="text-xs   text-center text-gray-700 dark:text-gray-400">
                  Voir mes salaires.
                </p>
              </Link>
              {/* </div> */}
              {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"> */}
              <Link
                to="/Missions"
                class="block max-w-s p-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl  text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Missions
                </h5>
                <p class="text-xs text-center text-gray-700 dark:text-gray-400">
                  Voir les missions.
                </p>
              </Link>
            </div>
          </div>

          {/* </div> */}
        </div>
    )
  
}
export default Home

