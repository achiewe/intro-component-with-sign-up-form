import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
function App(): JSX.Element {
  return <GlobalStyles />;
}

const styledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default App;
