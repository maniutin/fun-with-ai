import ResultList from "./ResultList";

export default function ResultListContainer(props) {
  const { returnedText, enteredPrompt, pastPrompts } = props;

  return (
    <div className="result-list">
      <ResultList
        returnedText={returnedText}
        enteredPrompt={enteredPrompt}
        pastPrompts={pastPrompts}
      />
    </div>
  );
}
