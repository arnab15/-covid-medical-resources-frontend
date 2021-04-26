import httpService from "./httpService";
const endpoint = "/requirements";

export const addNewRequirement = ({ requirementData }) => {
   return httpService.post(endpoint, requirementData);
};
export const getAllResourceRequirements = () => {
   return httpService.get(endpoint);
};
