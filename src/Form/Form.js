import "./Form.css";

export default function Form(props) {
  const {
    isSubmitting,
    formLabel,
    submitButtonLabel,
    formPlaceholder,
    inputValue,
    setInputValue,
    handleSubmit,
  } = props;

  return (
    <section className="input-form">
      <form onSubmit={handleSubmit} aria-label="input-form">
        <div className="form-label">
          <label htmlFor="input-field">{formLabel}</label>
        </div>
        <textarea
          id="input-field"
          name="input-field"
          placeholder={formPlaceholder}
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
