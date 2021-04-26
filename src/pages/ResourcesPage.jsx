import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Filter from "../components/Filter/Filter";
import ResourceCard from "../components/ResourceCard/ResourceCard";
import { getAllResources } from "../services/resourceService";
import Spiner from "../components/Spiner/spiner";
function ResourcesPage(props) {
   const [resources, setResources] = useState([]);
   const [filteredResource, setFilteredResource] = useState([]);
   const [spiner, setSpiner] = useState(false);
   const allResources = async () => {
      try {
         setSpiner(true);
         const { data } = await getAllResources();
         //console.log(data);
         setResources(data);
         setSpiner(false);
      } catch (error) {
         toast.error("Something went Wrong");
      }
   };
   useEffect(() => {
      allResources();
      return () => setResources([]);
   }, []);

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
                                <ResourceCard
                                   key={resource._id}
                                   resource={resource}
                                />
                             );
                          })
                        : filteredResource.map((resource) => {
                             return (
                                <ResourceCard
                                   key={resource._id}
                                   resource={resource}
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

export default ResourcesPage;
