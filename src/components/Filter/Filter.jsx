import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { allCities } from "../ResourcesComponent/city_helper";
import { healthServices } from "../ResourcesComponent/option_helper";

function Filter({ resourceArr, setResourceArr }) {
   const [city, setCity] = useState();
   const [selectedResource, setSelectedResource] = useState();
   const handelFilterSubmit = (e) => {
      const formData = {
         city,
         selectedResource,
      };
      if (formData.city && formData.resource) {
         const f = resourceArr.filter((resource) => {
            return (
               resource.city === formData.city &&
               resource.typesOfResource === formData.selectedResource
            );
         });
         setResourceArr(f);
         console.log(f);
      }
      if (formData.city) {
         const f = resourceArr.filter((resource) => {
            return resource.city === formData.city;
         });
         setResourceArr(f);
         console.log(f);
      }
      if (formData.selectedResource) {
         const f = resourceArr.filter((resource) => {
            return resource.typesOfResource === formData.selectedResource;
         });
         setResourceArr(f);
         console.log(f);
      }

      console.log(formData);
      e.preventDefault();
   };
   //   const handelResetClick = () => {
   //      selectInputRef.current.select.clearValue();
   //   };

   return (
      <div className="mx-10 my-5">
         <form action="" onSubmit={handelFilterSubmit}>
            <div className="flex flex-col md:flex-row justify-center items-center">
               <div className="w-40 mx-4">
                  <CustomSelect
                     labelName="Chose a city"
                     value={city}
                     placeholder="Select a city"
                     options={allCities}
                     onChange={(value) => setCity(value.value)}
                  />
               </div>
               <div className="w-40 mx-4">
                  <CustomSelect
                     labelName="Chose a resource"
                     value={selectedResource}
                     placeholder="select resource"
                     options={healthServices}
                     onChange={(value) => setSelectedResource(value.value)}
                  />
               </div>
               <div className="md:mt-10">
                  <button
                     type="submit"
                     className="focus:outline-none flex justify-between px-4 py-2  text-gray-600  bg-blue-200 rounded  my-4">
                     <span>
                        <svg
                           className="w-6 h-6 mr-2 text-gray-600"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                        </svg>
                     </span>
                     <span> filter</span>
                  </button>
               </div>
               <div className="md:mt-10 mx-4 hidden">
                  <button
                     type="submit"
                     className="focus:outline-none flex justify-between px-4 py-2 rounded-full text-gray-600  bg-blue-200   my-4">
                     <span> reset filter</span>
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
}

export default Filter;
