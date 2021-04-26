import React from "react";
import supplies from "../../assets/img/supplies.png";
import { ReactComponent as HelpLogo } from "../../assets/img/help.svg";
import prettyMilisecond from "pretty-ms";
import moment from "moment";
function ResourceCard({ resource }) {
   const {
      resourceName,
      typesOfResource,
      contactablePersonName,
      contactablePersonMobileNumber,
      city,
      address,
      createdAt,
      description,
      personVerified,
   } = resource;

   const now = moment(new Date());
   const then = moment(createdAt);
   const ms = now.diff(then, "milliseconds");
   let timeAgo = prettyMilisecond(ms, { verbose: true, compact: true });
   let verified = personVerified === "verified" ? personVerified : "";
   //    const unieq = moment.unix(createdAt);
   //    console.log(unieq);
   //    console.log(moment(unieq, "DD MM YYYY hh:mm:ss").fromNow());
   return (
      <div>
         <div className="relative bg-white py-6 px-6 rounded-3xl w-full   md:w-96 shadow-xl my-10">
            <div className=" text-white flex items-center absolute rounded-full py-4 bg-gray-200 px-4 shadow-xl  left-4 -top-6">
               <img
                  className="h-10 w-10"
                  src={supplies}
                  alt="medical supplies"
               />
            </div>
            <div className="relative">
               <span className="px-4 py-1  text-xs  sm:text-base rounded-full text-green-600  bg-green-200  absolute inline-block ml-16 ">
                  supplier
               </span>
               {verified ? (
                  <span className="px-4 py-1 text-xs  sm:text-base rounded-full text-yellow-600  bg-yellow-200  absolute inline-block ml-40 ">
                     mobile verified
                  </span>
               ) : (
                  <span className="px-4 py-1  text-xs  sm:text-base rounded-full text-red-600  bg-red-200 inline-block ml-40 ">
                     not verified yet
                  </span>
               )}
            </div>

            <div className="mt-8">
               <p className="text-xl font-semibold my-2 pt-4">{resourceName}</p>
               <div className="flex space-x-2 text-gray-400 text-base my-3">
                  <svg
                     className="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <p>{city}</p>
               </div>

               <div className="flex space-x-2 text-gray-400 text-base my-3">
                  <div className="w-6 h-6">
                     <HelpLogo />
                  </div>
                  <p>{typesOfResource}</p>
               </div>
               <div className="flex space-x-2 text-gray-400 text-base my-3">
                  <svg
                     className="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>

                  <p>{contactablePersonName}</p>
               </div>
               <div className="flex space-x-2 text-gray-600 text-base my-3">
                  <svg
                     className="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path>
                  </svg>
                  <p>
                     <a href={`tel:${contactablePersonMobileNumber}`}>
                        {contactablePersonMobileNumber}
                     </a>
                  </p>
               </div>

               {address && (
                  <div className="flex space-x-2 text-gray-400 text-base my-3">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                     </svg>
                     <p>{address}</p>
                  </div>
               )}
               <div className="flex space-x-2 text-gray-400 text-base my-3">
                  <svg
                     className="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p>{timeAgo} ago</p>
               </div>
               {description && (
                  <div className="flex space-x-2 text-gray-500 text-base my-3">
                     <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                     </svg>
                     <p>{description}</p>
                  </div>
               )}

               {/* <div className="border-t-2"></div> */}

               <div className="flex justify-between"></div>
            </div>
         </div>
      </div>
   );
}

export default ResourceCard;
