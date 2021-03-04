import { useState } from "react";
import { useHistory } from "react-router-dom";

const InputField = ({ placeholder, setTextToTranslate, submitButton }) => {
  const [text, setText] = useState("");
  const history = useHistory();

  const handleChange = (evt) => {
    evt.preventDefault();
    setText(evt.target.value);
    if (setTextToTranslate) {
      setTextToTranslate(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    localStorage.setItem("username", text);
    history.push("/translate");
  };

  return (
    <>
      <label>
        <input value={text} placeholder={placeholder} onChange={handleChange} />
      </label>
      { submitButton && <button type="button" onClick={handleSubmit}>
        Submit
      </button>}
    </>
  );
};

export default InputField;
