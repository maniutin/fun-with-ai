import "./ResultList.css";

export default function ResultList(props) {
  const { returnedText, enteredPrompt, pastPrompts, clearList } = props;

  const allPrompts = pastPrompts.slice(0, 10).map((prompt, index) => (
    <div key={index}>
      <table>
        <tbody>
          <tr>
            <td>Prompt:</td>
            <td>{prompt.enteredPrompt}</td>
          </tr>
          <tr>
            <td>Result:</td>
            <td>{prompt.returnedText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));

  return (
    <div className="result-list">
      <button onClick={clearList}>Clear List</button>
      {pastPrompts.length !== 0 && <h1>Results</h1>}
      {allPrompts}
    </div>
  );
}
