import React from "react";
import { Link } from "react-router-dom";

function HeroSection(props) {
   return (
      <>
         <p className="p-4 ml-2 text-red-400 text-center text-xs sm:text-sm md:text-base">
            <span className="pl-4 pr-1 text-red-400 font-semibold">
               Disclaimer :
            </span>
            All the Resources Are Crowd Sourced and added by people So Before
            Paying someone please verify it by yourself make sure that person is
            genuine
         </p>
         <div className="flex flex-col sm:flex-row items-center  justify-evenly">
            <div>
               <Link
                  to="/newrequirements"
                  className="px-3  flex items-center  hover:opacity-75">
                  <span className="px-4 py-2  text-xs sm:text-base rounded-full text-blue-600  bg-blue-200 ">
                     Add Your Requirement
                  </span>
               </Link>
            </div>
            <div>
               <Link
                  className="px-3  flex items-center  hover:opacity-75 mt-4"
                  to="/newresource">
                  <span className="px-4 py-2  text-xs sm:text-base rounded-full text-green-600  bg-green-200 ">
                     Add New Medical Resources
                  </span>
               </Link>
            </div>
         </div>
      </>
   );
}

export default HeroSection;
