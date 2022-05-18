import PromptPresets from "./PromptPresets";

export default function PromptPresetsContainer(props) {
  const { setInputValue } = props;

  const handleClick = (value) => {
    setInputValue(value);
  };

  return (
    <div className="prompt-presets-container">
      <PromptPresets handleClick={handleClick} />
    </div>
  );
}
