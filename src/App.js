import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TranslatePage from "./components/translation/TranslatePage.jsx";
import HomePage from "./components/home/HomePage.jsx";
import ProfilePage from "./components/profile/ProfilePage.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/translate">
          <TranslatePage></TranslatePage>
        </Route>
        <Route path="/profile">
          <ProfilePage></ProfilePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
