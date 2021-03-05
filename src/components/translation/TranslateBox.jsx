import "../../globalstyle.css";
import Sign from "./Sign";
function TranslateBox({ textToTranslate }) {
  const lowerCaseText = textToTranslate.toLowerCase();
  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };
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
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: 20,
          margin: 20,
        }}
      >
        {Array.from(lowerCaseText).map((letter, idx) => {
          if (isLetter(letter) || letter === " ") {
            return <Sign key={idx} letter={letter}></Sign>;
          }
        })}
      </div>
      <button onClick={saveTranslation} type="button">
        Save Translation
      </button>
    </>
  );
}

export default TranslateBox;
