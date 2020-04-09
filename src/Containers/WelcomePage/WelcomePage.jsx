import React, { useEffect } from "react";
import styles from "./WelcomePage.module.scss";
import Navbar from "../../Components/Navbar";
import WelcomeDisplayBox from "../../Components/WelcomeDisplayBox/WelcomeDisplayBox";

const WelcomePage = (props) => {
  const { user, signOut, fetchDetails } = props;

  return (
    <>
      <Navbar
        signOut={signOut}
        user={user}
        nextPage={"Edit"}
        destination={"/dashboard"}
      />
      <section className={styles.welcomePage}>
        <WelcomeDisplayBox
          title={"I earn..."}
          amount={fetchDetails.totalIncome}
          type={"a week"}
          isPrimary={true}
        />
        <WelcomeDisplayBox
          title={"I spend"}
          amount={fetchDetails.totalOutGoings}
          type={"a month in bills"}
          isPrimary={false}
        />
        <WelcomeDisplayBox
          title={"My Current Savings"}
          amount={fetchDetails.totalSavings}
          type={""}
          isPrimary={false}
        />
        <WelcomeDisplayBox
          title={"I need to put aside"}
          amount={fetchDetails.totalOutGoings / 4}
          type={"a week to make sure i can pay all my bills"}
          isPrimary={true}
        />
      </section>
    </>
  );
};

export default WelcomePage;
