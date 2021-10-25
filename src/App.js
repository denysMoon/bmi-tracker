import FormComponent from "./components/FormComponent";
import Header from "./components/Header";
import Container from "./components/styles/Container.styled";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutBMI from "./components/AboutBMI";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <FormComponent />
        <AboutBMI />
      </Container>
    </Router>
  );
};

export default App;
