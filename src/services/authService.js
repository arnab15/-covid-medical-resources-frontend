import http from "./httpService";

const loginUrl = "/mlogin";
const signupUrl = "/signup";
const loginWithGoogleUrl = "/googlelogin";

export function mentorLogin(email, password) {
   return http.post(loginUrl, {
      email,
      password,
   });
}
export function signup(name, email, password) {
   return http.post(signupUrl, {
      name,
      email,
      password,
   });
}
export function loginWithGoogle(token) {
   return http.post(
      loginWithGoogleUrl,
      {},
      {
         headers: { Authorization: `Bearer ${token}` },
      }
   );
}

// http.get(apiEndpoint + "/test")();
