import { useEffect, useState } from "react";
import { getItem, setItem } from "../services/storageService";

export function useTokenState() {
   const [value, setValue] = useState(() => {
      const retrivedToken = getItem();
      //console.log("useTokenHook/rv", retrivedToken);
      return retrivedToken !== null && retrivedToken;
   });
   useEffect(() => {
      setItem(value);
   }, [value]);
   //console.log("value:", value);
   return [value, setValue];
}
