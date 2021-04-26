import { useContext, useEffect } from "react";
import UserContext from "../../context/userContext";
import { deleteItem } from "../../services/storageService";

function Logout({ history }) {
   const { setCurrentUser } = useContext(UserContext);
   useEffect(() => {
      deleteItem();
      setCurrentUser(null);
      history.replace("/");
      return () => setCurrentUser(null);
   }, [history, setCurrentUser]);

   return null;
}

export default Logout;
