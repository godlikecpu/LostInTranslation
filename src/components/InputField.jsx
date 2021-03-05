import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../globalstyle.css";

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
        <input
          type="text"
          value={text}
          placeholder={placeholder}
          onChange={handleChange}
          maxLength={50}
          style={{
            textAlign: "center",
            width: 500,
            height: 35,
            fontSize: 20,
          }}
          className="border"
        />
      </label>
      {submitButton && (
        <button type="button" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </>
  );
};

export default InputField;
