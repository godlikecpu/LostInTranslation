import Sign from "./Sign";

const Translater = ({ textToTranslate, size }) => {
  const lowerCaseText = textToTranslate.toLowerCase();
  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };
  return (
    <>
      {Array.from(lowerCaseText).map((letter, idx) => {
        if (isLetter(letter) || letter === " ") {
          return <Sign key={idx} letter={letter} size={size}></Sign>;
        }
        return null;
      })}
    </>
  );
};

export default Translater;
