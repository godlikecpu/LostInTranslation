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
        Hi {name}
        <InputField setTextToTranslate={setTextToTranslate}></InputField>
        <TranslateBox textToTranslate={textToTranslate}></TranslateBox>
        <button onClick={goToProfile} type="button">
          Go to profile
        </button>
      </div>
    </>
  );
}

export default TranslatePage;
