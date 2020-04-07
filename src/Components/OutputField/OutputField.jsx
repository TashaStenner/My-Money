import React from "react";
import styles from "./OutputField.module.scss";

const OutputField = props => {
  const { placeholder, total } = props;

  return (
    <>
      <>
        <input
          className={styles.inputTxt}
          type="text"
          placeholder={placeholder}
          value={total}
          disabled
        />
      </>
    </>
  );
};

export default OutputField;
