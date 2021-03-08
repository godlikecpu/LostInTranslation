// This component represents a translated sign
const Sign = ({ letter, size, images }) => {
  return (
    <>
      {letter === " " ? (
        <span style={{ letterSpacing: size }}>{letter}</span>
      ) : (
        <img
          style={{ width: size, height: size }}
          src={images[`${letter}.png`].default}
          alt={letter}
        />
      )}
    </>
  );
};

export default Sign;
