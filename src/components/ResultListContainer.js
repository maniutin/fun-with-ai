import { useEffect } from "react";

import ResultList from "./ResultList";

export default function ResultListContainer(props) {
  const { returnedText, enteredPrompt, pastPrompts } = props;

  useEffect(() => {
    localStorage.setItem("recent-prompts", JSON.stringify(pastPrompts));
  }, [pastPrompts]);

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
