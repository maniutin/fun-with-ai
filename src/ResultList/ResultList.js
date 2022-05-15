import { resultsListTableText } from "../constants";
import { clearListButtonText } from "../constants";

import "./ResultList.css";

export default function ResultList(props) {
  const {
    pastPrompts,
    clearList,
    beingCleared,
    setBeingCleared,
    clearListConfirmation,
  } = props;

  // change slice end value to display more recent prompts
  const promptEntry = pastPrompts.slice(0, 10).map((prompt, index) => (
    <article key={index} className="prompt-entry">
      <table id="results-table">
        <tbody>
          <tr className="entered-prompt">
            <th scope="row">{resultsListTableText.prompt}</th>
            <td>{prompt.enteredPrompt}</td>
          </tr>
          <tr className="result">
            <th scope="row">{resultsListTableText.result}</th>
            <td>{prompt.returnedText}</td>
          </tr>
        </tbody>
      </table>
    </article>
  ));

  return (
    <section className="result-list">
      <div className="result-list-top">
        {pastPrompts.length !== 0 && (
          <div>
            <h2>{resultsListTableText.name}</h2>
            <p className="prompt-qty">{resultsListTableText.howMany}</p>
          </div>
        )}

        {!beingCleared && pastPrompts.length !== 0 && (
          <button
            id="clear-list-button"
            onClick={clearListConfirmation}
            aria-labelledby="clear-list"
          >
            {clearListButtonText.clearList}
          </button>
        )}

        {beingCleared && (
          <div className="clear-list-confirmation">
            <p id="confirmation-prompt">{clearListButtonText.confirmation}</p>
            <button
              id="confirm-clear-list-button"
              onClick={clearList}
              aria-labelledby="confirm-clear-list"
            >
              {clearListButtonText.clear}
            </button>
            <button
              id="cancel-clear-list-button"
              onClick={() => setBeingCleared(false)}
              aria-labelledby="cancel-clear-list"
            >
              {clearListButtonText.cancel}
            </button>
          </div>
        )}
      </div>

      <div className="recent-prompts">{promptEntry}</div>
    </section>
  );
}
