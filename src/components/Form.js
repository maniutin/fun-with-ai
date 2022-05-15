import { useState } from "react";

import "./Form.css";

export default function Form(props) {
  const { inputValue, setInputValue, handleSubmit } = props;

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-field" />
        <textarea
          id="input-field"
          name="input-field"
          placeholder="Enter prompt (e.g. 'Write a poem about bananas'):"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />

        <button type="submit" id="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
