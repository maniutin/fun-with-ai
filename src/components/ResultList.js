import "./ResultList.css";

export default function ResultList(props) {
  const { inputValue, returnedText, enteredPrompt } = props;

  return (
    <div className="result-list">
      <h1>Results</h1>
      <table>
        <tbody>
          <tr>
            <td>Prompt:</td>
            <td>{enteredPrompt}</td>
          </tr>
          <tr>
            <td>Result:</td>
            <td>{returnedText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
