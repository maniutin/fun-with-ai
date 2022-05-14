import { useState, useEffect } from "react";

import { data } from "../constants";
import { onGenerateText } from "../helpers";

import Form from "./Form";

export default function FormContainer(props) {
  const {
    inputValue,
    setInputValue,
    returnedText,
    setReturnedText,
    enteredPrompt,
    setEnteredPrompt,
  } = props;

  const promptData = { ...data, prompt: `${inputValue}` };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerateText(promptData, setReturnedText);
    setEnteredPrompt(inputValue);
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
