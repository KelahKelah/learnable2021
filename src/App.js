import "./App.css";
import Approute from "./approuter";
import { createContext, useState } from "react";

export const InputValuesContex = createContext();

function App() {
  const [inputValue, setInputValues] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    sex: "",
    address: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    learningPath: "",
    previousWorkLink: "",
    educationStatus: "",
    linkedIn: "",
    selectAQuestion: "",
    answer: "",
    listedBooks: "",
    summaryOfBook: "",
    greatestAchievement: "",
    sixMonthToAvailability: "",
    internshipMode: "",
    knowAbtUs: "",
    twitter: "",
    agreeStatus: "",
  });
  return (
    <div className="App">
      <InputValuesContex.Provider value={[inputValue, setInputValues]} >
        <Approute />
      </InputValuesContex.Provider>
    </div>
  );
}

export default App;
