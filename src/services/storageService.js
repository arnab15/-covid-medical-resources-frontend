import jwtDecode from "jwt-decode";
import httpService from "./httpService";
const key = "token";
export const setItem = (jwt) => {
   return localStorage.setItem(key, jwt);
};
export const deleteItem = () => {
   return localStorage.removeItem(key);
};

export const getItem = () => {
   return localStorage.getItem(key);
};

export const getTokenData = (token) => {
   try {
      const data = jwtDecode(token);
      return data;
   } catch (error) {
      //console.log(error);
   }
};

export const storeValue = (key, value) => {
   return localStorage.setItem(key, value);
};

export const retriveValue = (key) => {
   return localStorage.getItem(key);
};

export const objToString = (obj) => {
   return JSON.stringify(obj);
};
export const stringToObj = (str) => {
   return JSON.parse(str);
};

httpService.setJwt(getItem());
