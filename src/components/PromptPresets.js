import { promptPresets } from "../constants";

import "./PromptPresets.css";

export default function PromptPresets(props) {
  const { setInputValue } = props;

  const handleClick = (value) => {
    // event.preventDefault();
    setInputValue(value);
  };

  return (
    <section className="prompt-presets">
      <div>Try:</div>
      <button onClick={() => handleClick(promptPresets.keys)}>
        {promptPresets.keys}
      </button>
      <button onClick={() => handleClick(promptPresets.bees)}>
        {promptPresets.bees}
      </button>
      <button onClick={() => handleClick(promptPresets.seas)}>
        {promptPresets.seas}
      </button>
    </section>
  );
}
