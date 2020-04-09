import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import InputField from "../../Components/InputField";
import OutputField from "../../Components/OutputField/OutputField";
import Navbar from "../../Components/Navbar";
import { firestore } from "../../firebase";


const Dashboard = (props) => {
  const {user, signOut, fetchMoneyDetails} = props;
  const [mainWage, setMainWage] = useState(0);
  const [extraWage, setExtraWage] = useState(0);
  const [houseHold, setHouseHold] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savings, setSavings] = useState(0);
  const [food, setFood] = useState(0);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutGoings, setTotalOutGoings] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [moneyDetails, setMoneyDetails] = useState([]);
  

  
  const addMoneyDetails = () => {
    firestore.collection("users")
    .doc(user.uid)
    .set({
      totalIncome: totalIncome, 
      totalOutGoings: totalOutGoings, 
      totalSavings: totalSavings
    })
    .then(result => {
      fetchMoneyDetails();
      alert("thank you that was registered")
    })
    .catch(err => console.log(err));
  }
  
  
    useEffect(() => {
      fetchMoneyDetails();
    });


  const incomeMath = () => {
    return mainWage === 0 && extraWage === 0
      ? 0
      : parseInt(mainWage) + parseInt(extraWage);
  };

  const outGoingMath = () => {
    return houseHold === 0 && expenses === 0 && savings === 0 && food === 0
      ? 0
      : parseInt(houseHold) +
          parseInt(expenses) +
          parseInt(savings) +
          parseInt(food);
  };

  useEffect(() => {
    return (
      setTotalIncome(incomeMath()),
      setTotalOutGoings(outGoingMath),
      setTotalSavings(parseInt(currentSavings))
    );
  });

  return (
    <>
    <Navbar signOut={signOut} user={user} destination={"/welcome-page"} nextPage={"Home"}/>
      <section className={styles.dash}>
        <div className={styles.inputs}>
          <h2>My Income:</h2>
          <InputField
            type={"number"}
            placeholder={"My wage's after Tax £"}
            setDbData={(event) => setMainWage(event.target.value)}
          />
          <InputField
            type={"number"}
            placeholder={"Any extra income £"}
            setDbData={(event) => setExtraWage(event.target.value)}
          />
          <OutputField
            placeholder={"Total £"}
            total={`Total: £ ${totalIncome}`}
          />
        </div>

        <div className={styles.inputs}>
          <h2>My Monthly Spending</h2>
          <InputField
            type={"number"}
            placeholder={"Household bills £"}
            setDbData={(event) => setHouseHold(event.target.value)}
          />
          <InputField
            type={"number"}
            placeholder={"Other Expenses £"}
            setDbData={(event) => setExpenses(event.target.value)}
          />
          <InputField
            type={"number"}
            placeholder={"Savings £"}
            setDbData={(event) => setSavings(event.target.value)}
          />
          <InputField
            type={"number"}
            placeholder={"Food £"}
            setDbData={(event) => setFood(event.target.value)}
          />
          <OutputField
            placeholder={"Total £"}
            total={`Total: £ ${totalOutGoings}`}
          />
        </div>

        <div className={styles.inputs}>
          <h2>My Savings</h2>
          <InputField
            type={"number"}
            placeholder={"Current Savings £"}
            setDbData={(event) => setCurrentSavings(event.target.value)}
          />
          <OutputField placeholder={"Total"} total={`Total: £ ${totalSavings}`} />
        </div>
        <button className={styles.btn} onClick={() => addMoneyDetails()}>Submit This weeks totals</button>
      </section>
    </>
  );
};

export default Dashboard;
