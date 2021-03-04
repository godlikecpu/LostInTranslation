import { useState } from "react";
import { useHistory } from "react-router-dom";

function ProfilePage() {
  const [savedTranslations, setTranslations] = useState(JSON.parse(localStorage.getItem("savedTranslations")));
  const history = useHistory();

  const clearTranslations = () => {
    setTranslations([]);
    localStorage.removeItem('savedTranslations');
  };

  const deleteLocalstorage = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <>
      <h1>Profile</h1>
      { savedTranslations.map((savedTranslation, id) => {
          return <div key={id}>{savedTranslation}</div>
      })}
      <button onClick={clearTranslations} type="button">
        Clear translations
      </button>

      <button onClick={deleteLocalstorage} type="button">
        Logout
      </button>
    </>
  );
}

export default ProfilePage;
