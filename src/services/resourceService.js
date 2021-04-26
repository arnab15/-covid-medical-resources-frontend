import httpService from "./httpService";
const endpoint = "/resources";

export const addNewResource = ({ resourceDetails }) => {
   return httpService.post(endpoint, resourceDetails);
};

export const getAllResources = () => {
   return httpService.get(endpoint);
};
