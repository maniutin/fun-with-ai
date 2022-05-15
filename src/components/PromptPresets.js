import { promptPresets } from "../constants";

import "./PromptPresets.css";

export default function PromptPresets(props) {
  const { handleClick } = props;

  return (
    <section className="prompt-presets">
      <header>Try:</header>
      <button
        className="prompt-preset-button"
        onClick={() => handleClick(promptPresets.keys)}
      >
        {promptPresets.keys}
      </button>
      <button
        className="prompt-preset-button"
        onClick={() => handleClick(promptPresets.bees)}
      >
        {promptPresets.bees}
      </button>
      <button
        className="prompt-preset-button"
        onClick={() => handleClick(promptPresets.seas)}
      >
        {promptPresets.seas}
      </button>
    </section>
  );
}
