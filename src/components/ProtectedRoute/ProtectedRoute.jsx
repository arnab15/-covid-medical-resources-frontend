import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "../../context/userContext";

function ProtectedRoute({ path, component: Component, render, ...rest }) {
   const { currentUser } = useContext(UserContext);
   return (
      <Route
         {...rest}
         path={path}
         render={(props) => {
            // console.log(props);
            if (!currentUser) {
               return (
                  <Redirect
                     to={{
                        pathname: "/auth",
                        state: { from: props.location },
                     }}
                  />
               );
            }
            return Component ? <Component {...props} /> : render(props);
         }}
      />
   );
}

export default ProtectedRoute;
