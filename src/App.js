import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { Route, Switch, useLocation } from "react-router";
import Navbar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage";
import AddNewResource from "./components/ResourcesComponent/AddNewResource";
import UserContext from "./context/userContext";
import { getTokenData } from "./services/storageService";
import { useTokenState } from "./hooks/useTokenState";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ResourcesPage from "./pages/ResourcesPage";
import HeroSection from "./components/HeroSection/HeroSection";
import Logout from "./components/Logout/Logout";
import AddNewRequirement from "./components/ResourcesComponent/AddNewRequirement";
import RequirementPage from "./pages/RequirementPage";
import Footer from "./components/Footer/Footer";

function usePageViews() {
   let location = useLocation();
   useEffect(() => {
      if (!window.GA_INITIALIZED) {
         ReactGA.initialize("");
         window.GA_INITIALIZED = true;
      }
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
   }, [location]);
}

function App(props) {
   const [tokenValue] = useTokenState();
   const [currentUser, setCurrentUser] = useState(null);
   usePageViews();
   useEffect(() => {
      try {
         const user = getTokenData(tokenValue);
         setCurrentUser(user);
      } catch (error) {
         console.log("Err", error);
      }
   }, [tokenValue]);
   return (
      <div className="overflow-hidden">
         <UserContext.Provider
            value={{
               currentUser,
               setCurrentUser,
            }}>
            <Navbar />
            <HeroSection />
            <ToastContainer />
            <Switch>
               <ProtectedRoute
                  exact
                  path="/newresource"
                  component={AddNewResource}
               />
               <ProtectedRoute
                  exact
                  path="/newrequirements"
                  component={AddNewRequirement}
               />
               <Route exact path="/auth" component={LoginPage} />
               <Route exact path="/" component={ResourcesPage} />
               <Route exact path="/requirements" component={RequirementPage} />
               <Route exact path="/logout" component={Logout} />
            </Switch>
         </UserContext.Provider>
         <Footer />
      </div>
   );
}

export default App;
