import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBmi } from "../redux/action";
import { Button } from "./styles/Button.styled";
import { FormStyled } from "./styles/Form.styled";
import { Input } from "./styles/Input.styled";

const Form = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(getBmi(weight / (height * height)));
    setHeight("");
    setWeight("");
  };

  return (
    <FormStyled onSubmit={submit}>
      <Input
        placeholder="Weight, kg"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <Input
        placeholder="Heigh, m"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <Button onClick={submit}>Count</Button>
    </FormStyled>
  );
};

export default Form;
