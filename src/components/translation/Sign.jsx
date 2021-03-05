function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}
const images = importAll(
  require.context("../../signs", false, /\.(png|jpe?g|svg)$/)
);
const Sign = ({ letter }) => {
  return (
    <>
      {letter === " " ? (
        <span style={{ letterSpacing: 50 }}>{letter}</span>
      ) : (
        <img
          style={{ width: 50, height: 50 }}
          src={images[`${letter}.png`].default}
          alt={letter}
        />
      )}
    </>
  );
};

export default Sign;
