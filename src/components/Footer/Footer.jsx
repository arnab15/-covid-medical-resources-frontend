import React from "react";

function Footer(props) {
   return (
      <footer className="text-gray-600 body-font">
         <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a
               className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
               href="/">
               <span className="ml-3 text-xl">Covid Medical Resources</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
               Devloped By
               <a
                  href="https://twitter.com/arnabsahoo9"
                  className="text-gray-600 ml-1"
                  rel="noopener noreferrer"
                  target="_blank">
                  @Arnab
               </a>
            </p>
            <p className="p-4 ml-2 text-red-400">
               All the Resources Are Crowd Sourced and added by people So Before
               Paying someone please verify it by yourself
            </p>
         </div>
      </footer>
   );
}

export default Footer;
