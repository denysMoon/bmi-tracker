import { Container } from "./styles/Container.styled";
import { useSelector } from "react-redux";

const UserData = () => {
  const userData = useSelector((store) => store.bmi.bmi);

  const showUserData = () => {
    if (userData) {
      return "You BMI: " + +userData.toFixed(1);
    }
  };

  return <Container>{showUserData()}</Container>;
};

export default UserData;
