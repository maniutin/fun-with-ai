import { useState } from "react";

import "./Form.css";

export default function Form(props) {
  const { inputValue, setInputValue, handleSubmit } = props;

  return (
    <div className="input-form">
      <h2>Enter prompt:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-field" />
        <textarea
          id="input-field"
          name="input-field"
          rows="4"
          cols="50"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        >
          At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies.
        </textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
