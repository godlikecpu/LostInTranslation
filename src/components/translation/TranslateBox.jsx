import "../../globalstyle.css";
import Translater from "./Translater";

// Translate box component

function TranslateBox({ textToTranslate }) {
  /**
   * Logic for saving translations. If there is nothing in localStorage a new array will be created and stored.
   * LocalStorage only holds strings, so arrays have to be JSON stringified before saving and parsed before usage.
   */
  const saveTranslation = () => {
    let savedTranslations = JSON.parse(
      localStorage.getItem("savedTranslations")
    );
    if (savedTranslations) {
      if (savedTranslations.length === 10) {
        savedTranslations.pop();
      }
      savedTranslations.push(textToTranslate);
      localStorage.setItem(
        "savedTranslations",
        JSON.stringify(savedTranslations)
      );
    } else {
      let array = [];
      array.push(textToTranslate);
      localStorage.setItem("savedTranslations", JSON.stringify(array));
    }
  };

  return (
    <>
      <div
        style={{
          display: "inline-block",
          width: 500,
          height: 300,
          margin: 20,
          caretColor: "transparent",
        }}
        className="border"
      >
        <Translater textToTranslate={textToTranslate} size={50}></Translater>
      </div>
      <button className="btn" onClick={saveTranslation} type="button">
        Save Translation
      </button>
    </>
  );
}

export default TranslateBox;
