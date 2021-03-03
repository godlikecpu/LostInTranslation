import "../../globalstyle.css";
import Sign from "./Sign";
import UnsupportedSign from "./UnsupportedSign";
function TranslateBox({ textToTranslate }) {
  const lowerCaseText = textToTranslate.toLowerCase();
  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: 500,
          height: 300,
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: 20,
          margin: 20,
        }}
      >
        {Array.from(lowerCaseText).map((letter, idx) => {
          if (isLetter(letter)) {
            return <Sign key={idx} letter={letter}></Sign>;
          } else {
            return <UnsupportedSign letter={letter}></UnsupportedSign>;
          }
        })}
      </div>
    </>
  );
}

export default TranslateBox;
