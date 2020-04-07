import React, { useEffect } from "react";
import styles from "./LandingPage.module.scss";
import { navigate } from "@reach/router";

const LandingPage = (props) => {
  const { user, signIn } = props;

  useEffect(() => {
    if (user) {
      navigate("/welcome-page");
    }
  }, [user]);

  return (
    <>
      <section className={styles.hello}>
        <h2>Welcome to My Money</h2>
        <p>Would you like to log in?</p>
        <button onClick={signIn}>Log in</button>
      </section>
    </>
  );
};

export default LandingPage;
