import React from "react";
import styles from "./WelcomeDisplayBox.module.scss";

const WelcomeDisplayBox = (props) => {
  const { title, amount, type, isPrimary } = props;
  const displayStyles = isPrimary ? styles.primary : styles.secondary

  return (
    <section className={`${styles.welcome} ${displayStyles}`}>
      <h3>{title}</h3>
      <h2>£ {amount}</h2>
      <h3 className={styles.right}>{type}</h3>
    </section>
  );
};

export default WelcomeDisplayBox;
