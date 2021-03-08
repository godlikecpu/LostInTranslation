import Sign from "./Sign";

/**
 * This method imports all the sign images and stores it in an object
 */

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};
const images = importAll(
  require.context("../../assets/signs", false, /\.(png|jpe?g|svg)$/)
);

const Translater = ({ textToTranslate, size }) => {
  //Make it all lower case
  const lowerCaseText = textToTranslate.toLowerCase();
  // Regex matching for letters A-Z
  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };
  return (
    <>
      {Array.from(lowerCaseText).map((letter, idx) => {
        if (isLetter(letter) || letter === " ") {
          return (
            <Sign key={idx} letter={letter} size={size} images={images}></Sign>
          );
        }
        return null;
      })}
    </>
  );
};

export default Translater;
