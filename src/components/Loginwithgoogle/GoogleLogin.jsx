import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { getTokenData } from "../../services/storageService";
import { loginWithGoogle } from "../../services/authService";
import { ReactComponent as GoogleLogo } from "../../assets/img/search.svg";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Redirect, withRouter } from "react-router-dom";
import { useTokenState } from "../../hooks/useTokenState";
import httpService from "../../services/httpService";

const LoginWithGoogle = ({ buttonText, history, location }) => {
   const [, setToken] = useTokenState();
   const [error, setError] = useState(null);
   const { currentUser, setCurrentUser } = useContext(UserContext);
   if (currentUser) {
      return <Redirect to="/" />;
   }
   const responseSuccessGoogleLogin = async (res) => {
      try {
         const response = await loginWithGoogle(res.tokenId);
         if (response.status === 201) {
            const token = response.headers["x-auth-token"];
            httpService.setJwt(token);

            const userData = getTokenData(token);
            //console.log("User data", userData);
            setCurrentUser(userData);
            setToken(token);

            const { state } = location;

            history.replace(state ? state.from.pathname : "/");
         }
         if (response.status === 200) {
            setToken(response.data.token);
            const token = response.data.token;
            httpService.setJwt(token);
            const userData = getTokenData(token);
            setCurrentUser(userData);
            setToken(token);
            // history.replace("/newresource");
            const { state } = location;

            history.replace(state ? state.from.pathname : "/");

            //history.replace(state ? state.from.pathname : "/");
         }
         setError(null);
      } catch (error) {
         if (error.response && error.response.status >= 400)
            setError(error.response.data.error.message);
      }
   };

   const responseSuccessGoogleLoginFail = ({ details }) => {
      // setError(details);
   };

   return (
      <div className="mx-auto ">
         {error && <p className="text-center m-2 text-red-500">{error}</p>}
         <GoogleLogin
            clientId="719014752967-u75h288rtql74l9rdgvtn7vmf6tetejc.apps.googleusercontent.com"
            render={(renderProps) => (
               <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="px-4 py-2 mt-4 flex text-black w-full font-light tracking-wider items-center justify-center border border-gray-200 bg-gray-100 hover:bg-gray-200 focus:outline-none shadow-md rounded">
                  <span className="mx-4 inline-block">
                     <GoogleLogo />
                  </span>
                  <span className="inline-block font-medium text-gray-500">
                     {buttonText}
                  </span>
               </button>
            )}
            onSuccess={responseSuccessGoogleLogin}
            onFailure={responseSuccessGoogleLoginFail}
            cookiePolicy={"single_host_origin"}
         />
      </div>
   );
};

export default withRouter(LoginWithGoogle);
