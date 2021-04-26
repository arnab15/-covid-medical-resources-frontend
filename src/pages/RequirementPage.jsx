import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Filter from "../components/Filter/Filter";
import RequirementResourceCard from "../components/ResourceCard/RequirementResourceCard";
import { getAllResourceRequirements } from "../services/requirementService";
import Spiner from "../components/Spiner/spiner";
function RequirementPage(props) {
   const [resources, setResources] = useState([]);
   const [filteredResource, setFilteredResource] = useState([]);
   const [spiner, setSpiner] = useState(false);
   const allRequirementResources = async () => {
      try {
         setSpiner(true);
         const { data } = await getAllResourceRequirements();
         //console.log(data);
         //  console.log(data);
         setResources(data);
         setSpiner(false);
      } catch (error) {
         toast.error("Something went Wrong");
      }
   };
   useEffect(() => {
      allRequirementResources();
      return () => setResources([]);
   }, []);
   useEffect(() => {}, [filteredResource]);
   //console.log("Filered Resources", filteredResource);
   return (
      <div>
         {spiner ? (
            <Spiner />
         ) : (
            <>
               <Filter
                  resourceArr={resources}
                  setResourceArr={setFilteredResource}
               />

               <div>
                  <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 m-4">
                     {filteredResource.length < 1
                        ? resources.map((resource) => {
                             return (
                                <RequirementResourceCard
                                   key={resource._id}
                                   resourceRequirements={resource}
                                />
                             );
                          })
                        : filteredResource.map((resource) => {
                             return (
                                <RequirementResourceCard
                                   key={resource._id}
                                   resourceRequirements={resource}
                                />
                             );
                          })}
                  </div>
               </div>
            </>
         )}
      </div>
   );
}

export default RequirementPage;
