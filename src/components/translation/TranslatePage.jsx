import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputField from "../InputField";
import TranslateBox from "./TranslateBox";
import "../../globalstyle.css";

function TranslatePage() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const name = localStorage.getItem("username");
  const history = useHistory();

  const goToProfile = () => {
    history.push("/profile");
  };

  return (
    <>
      <div className="center">
        <h1>Translate</h1>
        <p>
          Hi {name}, input up to 50 characters from A-Z and see the translation
        </p>
        <InputField setTextToTranslate={setTextToTranslate}></InputField>
        <TranslateBox textToTranslate={textToTranslate}></TranslateBox>
        <button onClick={goToProfile} className="btn" type="button">
          Go to profile
        </button>
      </div>
    </>
  );
}

export default TranslatePage;
