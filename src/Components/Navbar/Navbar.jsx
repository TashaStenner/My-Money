import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";
import { navigate, Link } from "@reach/router";
// import Link from "@reach/router;"

const Navbar = (props) => {
  const { user, signOut, destination, nextPage } = props;

  useEffect(() => {
    if (!user) {
      navigate("/landing-page");
    }
  }, [user]);

  return (
    <>
      <section className={styles.nav}>
        <h2>My Money...</h2>
        <div className={styles.links}>
        <Link to={`${destination}`} className={styles.link}>
        <button className={styles.btn}>{`${nextPage}`} </button>
        </Link>
        <div className={styles.link}>
        <button className={styles.btn} onClick={signOut}>log out</button>
        </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
