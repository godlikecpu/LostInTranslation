import InputField from "../InputField";
import "../../globalstyle.css";

// Home page component

const HomePage = () => {
  return (
    <>
      <div className="center">
        <h1>Welcome</h1>
        <InputField
          submitButton={true}
          placeholder="Input your name"
        ></InputField>
      </div>
    </>
  );
};

export default HomePage;
