import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react";

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment:1000,
    annualInvestment: 2000,
    excpectedReturn: 6,
    duration: 10
});
setUserInput(prevUserInput => {
  return {
      ...prevUserInput,
      [inputIdentifier]: newValue
  };
});

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: newValue
      };
  });
}

  return (
    <>
      <Header/>
    <UserInput />
    </>
  
  )
}

export default App;
