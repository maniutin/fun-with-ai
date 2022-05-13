import { useEffect } from "react";

import Form from "./components/Form.js";

import { data } from "./constants";
import { onGenerateText } from "./helpers";

import "./App.css";

function App() {
  // const promptData = { ...data, prompt: "write a poem about me as autechre" };

  // onGenerateText(promptData);

  return (
    <div className="App">
      <h1>Fun With AI</h1>
      <Form />
    </div>
  );
}

export default App;
