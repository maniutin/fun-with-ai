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
          placeholder="Enter prompt:"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
