import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import MobBg from "../src/images/bg-intro-mobile.png";
import PageHeader from "./components/PageHeader";
import SignUpForm from "./components/SignupForm";
import DeskBg from "../src/images/bg-intro-desktop.png";

function App(): JSX.Element {
  return (
    <StyledMainContainer>
      <GlobalStyles />
      <PageHeader />
      <SignUpForm />
    </StyledMainContainer>
  );
}

const StyledMainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  background-image: url(${MobBg});
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  padding: 88px 24px 68px 24px;
  background-color: #ff7979;
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
    padding: 121px 0;
    gap: 45px;
    background-image: url(${DeskBg});
  }
`;
export default App;
