import React from "react";

import LoginWithGoogle from "../components/Loginwithgoogle/GoogleLogin";

function Auth(props) {
   return (
      <div className="mt-10 mx-6 md:max-w-sm md:mx-auto">
         <h1 className="text-center font-semibold text-xl text-red-400">
            To Add New Health Resource You Must Have to Login
         </h1>
         <LoginWithGoogle buttonText="Login with Google" />
      </div>
   );
}

export default Auth;
