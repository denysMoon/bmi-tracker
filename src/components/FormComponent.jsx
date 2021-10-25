import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBmi } from "../redux/action";
import ButtonComponent from "./ButtonComponent";
import Container from "./styles/Container.styled";
import Form from "./styles/Form.styled";
import Input from "./styles/Input.styled";

const FormComponent = () => {
  const [kg, setKg] = useState("");
  const [height, setHeight] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getBmi(kg * height));
    setKg("");
    setHeight("");
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Вага"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
          type="number"
        />
        <Input
          placeholder="Зріст"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="number"
        />
        <ButtonComponent onClick={onSubmit} />
      </Form>
    </Container>
  );
};

export default FormComponent;
