import FormContainer from "./components/FormContainer";

import { data } from "./constants";
import { onGenerateText } from "./helpers";

import "./App.css";

function App() {
  // const promptData = { ...data, prompt: "write a poem about me as autechre" };

  // onGenerateText(promptData);

  return (
    <div className="App">
      <h1>Fun With AI</h1>
      <FormContainer />
    </div>
  );
}

export default App;
