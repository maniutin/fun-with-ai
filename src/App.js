import { useState } from "react";

import FormContainer from "./components/FormContainer";
import ResultListContainer from "./components/ResultListContainer";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [enteredPrompt, setEnteredPrompt] = useState("");
  const [returnedText, setReturnedText] = useState("");

  return (
    <div className="App">
      <h1>Fun With AI</h1>
      <FormContainer
        inputValue={inputValue}
        setInputValue={setInputValue}
        returnedText={returnedText}
        setReturnedText={setReturnedText}
        enteredPrompt={enteredPrompt}
        setEnteredPrompt={setEnteredPrompt}
      />
      <ResultListContainer
        inputValue={inputValue}
        returnedText={returnedText}
        enteredPrompt={enteredPrompt}
      />
    </div>
  );
}

export default App;
