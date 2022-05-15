import { useEffect, useState } from "react";

import ResultList from "./ResultList";

import "./ResultListContainer.css";

export default function ResultListContainer(props) {
  const { pastPrompts, setPastPrompts } = props;

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
    <div className="result-list-container">
      <ResultList
        pastPrompts={pastPrompts}
        clearList={clearList}
        beingCleared={beingCleared}
        setBeingCleared={setBeingCleared}
        clearListConfirmation={clearListConfirmation}
      />
    </div>
  );
}
