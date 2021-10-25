import { Switch, Route } from "react-router-dom";
import About from "./About";
import Main from "./Main";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

export default AppRoute;
