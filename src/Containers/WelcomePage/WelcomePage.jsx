import React from "react";
import styles from "./WelcomePage.module.scss";
import Navbar from "../../Components/Navbar";
import WelcomeDisplayBox from "../../Components/WelcomeDisplayBox/WelcomeDisplayBox";

const WelcomePage = (props) => {
  const {user, signOut, fetchDetails} = props;
  return (
    <>
      <Navbar signOut={signOut} user={user} nextPage={"Edit"} destination={"/dashboard"}/>
      <section className={styles.welcomePage}>
        <WelcomeDisplayBox
          title={"I earn..."}
          amount={900}
          type={"a month"}
          isPrimary={true}
        />
        <WelcomeDisplayBox
          title={"I earn..."}
          amount={900}
          type={"a month"}
          isPrimary={false}
        />
        <WelcomeDisplayBox
          title={"I earn..."}
          amount={900}
          type={"a month"}
          isPrimary={false}
        />
        <WelcomeDisplayBox
          title={"I earn..."}
          amount={900}
          type={"a month"}
          isPrimary={true}
        />
      </section>
    </>
  );
};

export default WelcomePage;
