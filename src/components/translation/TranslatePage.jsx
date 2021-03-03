import { useState } from "react";
import InputField from "../InputField";
import TranslateBox from "./TranslateBox";
import "../../globalstyle.css";

function TranslatePage() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const name = localStorage.getItem("username");
  return (
    <>
      <div className="center">
        <h1>Translate</h1>
        Hi {name}
        <InputField setTextToTranslate={setTextToTranslate}></InputField>
        <TranslateBox textToTranslate={textToTranslate}></TranslateBox>
      </div>
    </>
  );
}

export default TranslatePage;
