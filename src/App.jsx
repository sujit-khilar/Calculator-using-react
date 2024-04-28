import Display from "./components/Display"
import styles from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer"
import { useState } from "react"

function App() {

  const [calval, setcalval] = useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText === "c"){
      setcalval("");
    }else if(buttonText === "="){
      const result= eval(calval);
      setcalval(result);
    }else{
      const newDisplayValue=calval + buttonText;
      setcalval(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calval}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  )
}

export default App
