import { data } from "../constants";
import { submitButtonText } from "../constants";
import { formPlaceholder } from "../constants";

import { onGenerateText } from "../helpers";

import Form from "./Form";

export default function FormContainer(props) {
  const {
    isSubmitting,
    inputValue,
    setInputValue,
    setReturnedText,
    setEnteredPrompt,
    setIsSubmitting,
  } = props;

  const promptData = { ...data, prompt: `${inputValue}` };

  const submitButtonLabel = isSubmitting
    ? submitButtonText.submitting
    : submitButtonText.submit;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    onGenerateText(promptData, setReturnedText, setIsSubmitting);
    setEnteredPrompt(inputValue);
  };

  return (
    <div className="form-container">
      <Form
        isSubmitting={isSubmitting}
        submitButtonLabel={submitButtonLabel}
        formPlaceholder={formPlaceholder}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
