import { useState } from "react";

import Form from "./Form";

export default function FormContainer() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${inputValue}`);
  };

  console.log("=== VALUE: ", inputValue);

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
