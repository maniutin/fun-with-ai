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
    isSubmitting,
    setIsSubmitting,
  } = props;

  const promptData = { ...data, prompt: `${inputValue}` };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    onGenerateText(promptData, setReturnedText, setIsSubmitting);
    setEnteredPrompt(inputValue);
  };

  return (
    <div className="form-container">
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
