import { useState } from "react";
import { useHistory } from "react-router-dom";
import Translater from "../translation/Translater";
import "../../globalstyle.css";

function ProfilePage() {
  //Gets initial state from localStorage
  const [savedTranslations, setTranslations] = useState(
    JSON.parse(localStorage.getItem("savedTranslations"))
  );
  const history = useHistory();

  /**
   * Removes the saved translations in state and in local storage
   */
  const clearTranslations = () => {
    setTranslations([]);
    localStorage.removeItem("savedTranslations");
  };

  /**
   * Clears localStorage of everything and redirects to homepage
   */
  const signOut = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <>
      <div className="center">
        <h1>Profile</h1>
        <h3>Translations:</h3>
        {savedTranslations &&
          savedTranslations.map((savedTranslation, id) => {
            return (
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: 20,
                  width: "50%",
                  textAlign: "center",
                  margin: 5,
                }}
                key={id}
              >
                <p>{savedTranslation}:</p>
                <Translater textToTranslate={savedTranslation} size={30} />
              </div>
            );
          })}
        <button onClick={clearTranslations} type="button" className="btn">
          Clear translations
        </button>

        <button onClick={signOut} type="button" className="btn">
          Logout
        </button>
      </div>
    </>
  );
}

export default ProfilePage;
