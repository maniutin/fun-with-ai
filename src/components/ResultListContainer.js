import { useEffect, useState } from "react";

import ResultList from "./ResultList";

export default function ResultListContainer(props) {
  const { returnedText, enteredPrompt, pastPrompts, setPastPrompts } = props;

  const [beingCleared, setBeingCleared] = useState(false);

  useEffect(() => {
    localStorage.setItem("recent-prompts", JSON.stringify(pastPrompts));
  }, [pastPrompts]);

  const clearListConfirmation = () => {
    setBeingCleared(true);
  };

  const clearList = () => {
    setPastPrompts([]);
    localStorage.clear();
    setBeingCleared(false);
  };

  return (
    <div className="result-list">
      <ResultList
        returnedText={returnedText}
        enteredPrompt={enteredPrompt}
        pastPrompts={pastPrompts}
        clearList={clearList}
        beingCleared={beingCleared}
        setBeingCleared={setBeingCleared}
        clearListConfirmation={clearListConfirmation}
      />
    </div>
  );
}
