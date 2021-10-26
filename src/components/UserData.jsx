import { Container } from "./styles/Container.styled";
import { useSelector } from "react-redux";

const UserData = () => {
  const userData = useSelector((store) => store.bmi.bmi);

  const showUserData = () => {
    if (userData) {
      return +userData.toFixed(1);
    }
  };

  return <Container>You BMI: {showUserData()}</Container>;
};

export default UserData;
