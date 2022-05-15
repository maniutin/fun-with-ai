import { useState } from "react";

import "./Form.css";

export default function Form(props) {
  const {
    inputValue,
    setInputValue,
    handleSubmit,
    isSubmitting,
    submitButtonLabel,
  } = props;

  return (
    <section className="input-form">
      <form onSubmit={handleSubmit} aria-label="input-form">
        <label htmlFor="input-field" />
        <textarea
          id="input-field"
          name="input-field"
          placeholder="Enter prompt (e.g. 'Write a poem about bananas'):"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />

        <button
          type="submit"
          className={`${
            isSubmitting ? "submit-button--loading" : "submit-button"
          }`}
          disabled={isSubmitting}
        >
          {submitButtonLabel}
        </button>
      </form>
    </section>
  );
}
