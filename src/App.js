import { useState, useEffect } from "react";

import FormContainer from "./Form/FormContainer";
import PromptPresetsContainer from "./PromptPresets/PromptPresetsContainer";
import ResultListContainer from "./ResultList/ResultListContainer";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [enteredPrompt, setEnteredPrompt] = useState("");
  const [returnedText, setReturnedText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pastPrompts, setPastPrompts] = useState(() => {
    const saved = localStorage.getItem("recent-prompts");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    let promptsArr = [...pastPrompts];
    if (enteredPrompt && returnedText) {
      promptsArr.unshift({ enteredPrompt, returnedText });
      setPastPrompts(promptsArr);
    }
  }, [returnedText]);

  return (
    <main className="App">
      <header>
        <h1 id="app-title">Fun With AI</h1>
      </header>
      <FormContainer
        isSubmitting={isSubmitting}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setReturnedText={setReturnedText}
        setEnteredPrompt={setEnteredPrompt}
        setIsSubmitting={setIsSubmitting}
      />

      <PromptPresetsContainer setInputValue={setInputValue} />

      <ResultListContainer
        pastPrompts={pastPrompts}
        setPastPrompts={setPastPrompts}
      />
    </main>
  );
}

export default App;
