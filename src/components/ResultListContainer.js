import ResultList from "./ResultList";

export default function ResultListContainer(props) {
  const { inputValue, returnedText, enteredPrompt } = props;

  return (
    <div className="result-list">
      <ResultList
        inputValue={inputValue}
        returnedText={returnedText}
        enteredPrompt={enteredPrompt}
      />
    </div>
  );
}
