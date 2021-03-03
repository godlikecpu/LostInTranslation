import InputField from "../InputField";
import "../../globalstyle.css";

const HomePage = () => {
  return (
    <>
      <div className="center">
        <h1>Welcome</h1>
        <InputField placeholder="Input your name"></InputField>
      </div>
    </>
  );
};

export default HomePage;