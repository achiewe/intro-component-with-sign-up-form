import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import MobBg from "../src/images/bg-intro-mobile.png";
import PageHeader from "./components/PageHeader";

function App(): JSX.Element {
  return (
    <StyledMain>
      <GlobalStyles />
      <PageHeader />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${MobBg});
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  padding: 88px 24px 68px 24px;
  background-color: #ff7979;
`;
export default App;
