import React from "react";
import styles from "./InputField.module.scss";

const InputField = props => {
  const { placeholder, type, setDbData} = props;

  return (
    <>
      <input
        className={styles.inputTxt}
        type={type}
        placeholder={placeholder}
        onInput={setDbData}
      />
    </>
  );
};

export default InputField;
