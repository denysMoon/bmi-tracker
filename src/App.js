import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Wrapper } from "./components/styles/Wrapper.styled";
import AppRoute from "./components/AppRoute";

const App = () => {
  return (
    <Router>
      <Header />
      <Wrapper>
        <AppRoute />
      </Wrapper>
    </Router>
  );
};

export default App;
