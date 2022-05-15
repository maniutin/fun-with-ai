import "./ResultList.css";

export default function ResultList(props) {
  const {
    returnedText,
    enteredPrompt,
    pastPrompts,
    clearList,
    beingCleared,
    setBeingCleared,
    clearListConfirmation,
  } = props;

  // change slice end value to display more recent prompts
  const promptEntry = pastPrompts.slice(0, 10).map((prompt, index) => (
    <div key={index} className="prompt-entry">
      <table id="results-table">
        <tbody>
          <tr className="prompt">
            <th>Prompt:</th>
            <td>{prompt.enteredPrompt}</td>
          </tr>
          <tr className="result">
            <th>Result:</th>
            <td>{prompt.returnedText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));

  return (
    <div className="result-list">
      <div className="result-list-top">
        {pastPrompts.length !== 0 && <h1>Results</h1>}

        {!beingCleared && pastPrompts.length !== 0 && (
          <button id="clear-list-button" onClick={clearListConfirmation}>
            Clear List
          </button>
        )}

        {beingCleared && (
          <div className="clear-list-confirmation">
            <p id="confirmation-prompt">Are you sure?</p>
            <button id="confirm-clear-list-button" onClick={clearList}>
              Clear
            </button>
            <button
              id="cancel-clear-list-button"
              onClick={() => setBeingCleared(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="recent-prompts">{promptEntry}</div>
    </div>
  );
}
