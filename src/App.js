import Form from "./components/Form.js";

import { data } from "./constants";
import { onGenerateText } from "./helpers";

import "./App.css";

function App() {
  const promptData = { ...data, prompt: "write a poem about me and autechre" };
  onGenerateText(promptData);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
