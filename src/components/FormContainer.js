import { useState } from "react";

import { data } from "../constants";
import { onGenerateText } from "../helpers";

import Form from "./Form";

export default function FormContainer() {
  const [inputValue, setInputValue] = useState("");
  const [returnedText, setReturnedText] = useState("");

  console.log("=== RES: ", returnedText);

  const promptData = { ...data, prompt: `${inputValue}` };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerateText(promptData, setReturnedText);
  };

  return (
    <div className="form-container">
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
