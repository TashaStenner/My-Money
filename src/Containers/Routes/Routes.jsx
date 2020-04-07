import React, { useEffect, useState } from "react";
import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import Dashboard from "../Dashboard/Dashboard";
import WelcomePage from "../WelcomePage/WelcomePage";
import LandingPage from "../LandingPage/LandingPage";
import PrivateRoutes from "../PrivateRoutes";
import { firestore } from "../../firebase";

const Routes = (props) => {
  const { user, signIn, signOut } = props;
  const [moneyDetails, setMoneyDetails] = useState([]);
  
  const fetchMoneyDetails = () => {
    if(user) {
      firestore
      .collection("users")
      .doc(user.uid)
      .get()
      .then(doc => {
        console.log(doc.data().moneyDetails);
        setMoneyDetails(doc.data().moneyDetails)
      })
      .catch(err => console.log(err));
    }
  };
  
  const addMoneyDetails = money => {
    firestore.collection("users")
    .doc(user.uid)
    .set({
      moneyDetails: [...moneyDetails, money]
    })
    .then(result => {
      fetchMoneyDetails();
    })
    .catch(err => console.log(err));
  }
  
  
    useEffect(() => {
      fetchMoneyDetails();
    });

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="landing-page" />
        <LandingPage path="landing-page" signIn={signIn} user={user}/>

        <PrivateRoutes path="/" user={user}>
          <Dashboard path="dashboard" signOut={signOut} user={user} addMoneyDetails={() => addMoneyDetails()}/>
          <WelcomePage path="welcome-page" signOut={signOut} user={user} fetchDetails={() => fetchMoneyDetails()}/>
        </PrivateRoutes>
      </Router>
    </>
  );
};
export default Routes;
