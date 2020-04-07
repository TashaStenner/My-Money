import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar";
import InputField from "./Components/InputField";
import Dashboard from "./Containers/Dashboard/Dashboard";
import firebase, { provider } from "./firebase";
import WelcomePage from "./Containers/WelcomePage/WelcomePage";
import LandingPage from "./Containers/LandingPage/LandingPage";
import Routes from "./Containers/Routes";

function App() {
  const [user, setUser] = useState(null);

  const signInWithRedirect = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        alert("You have signed out");
      })
      .catch((error) => {
        alert("Oh no an error :(");
      });
  };

  const getUser = () => {
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        if (result.credential) {
          const token = result.credential.accessToken;
        }
        console.log(result);
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.app}>
      <Routes signIn={signInWithRedirect} signOut={signOut} user={user}/>
    </div>
  );
}

export default App;
