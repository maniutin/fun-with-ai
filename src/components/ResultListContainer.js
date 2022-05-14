import { useEffect } from "react";

import ResultList from "./ResultList";

export default function ResultListContainer(props) {
  const { returnedText, enteredPrompt, pastPrompts, setPastPrompts } = props;

  useEffect(() => {
    localStorage.setItem("recent-prompts", JSON.stringify(pastPrompts));
  }, [pastPrompts]);

  const clearList = () => {
    setPastPrompts([]);
    localStorage.clear();
  };

  return (
    <div className="result-list">
      <ResultList
        returnedText={returnedText}
        enteredPrompt={enteredPrompt}
        pastPrompts={pastPrompts}
        clearList={clearList}
      />
    </div>
  );
}
