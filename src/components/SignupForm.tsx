import styled from "styled-components";
import PricingBanner from "./PricingBanner";

const SignUpForm = (): JSX.Element => {
  return (
    <SignUpMain>
      <PricingBanner />
      <MainSignDiv>
        <label>
          <input type="text" placeholder="First Name" />
        </label>
        <label>
          <input type="text" placeholder="Last Name" />
        </label>
        <label>
          <input type="text" placeholder="Email Address" />
        </label>
        <label>
          <input type="text" placeholder="Password" />
        </label>
      </MainSignDiv>
    </SignUpMain>
  );
};

const SignUpMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const MainSignDiv = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);

  label {
    position: relative;
    width: 100%;
  }

  input {
    width: 279px;
    padding: 15px 0 15px 19.41px;
    border: 1px solid #dedede;
    border-radius: 5px;
  }

  ::placeholder {
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.25px;
    text-align: left;
    opacity: 0.75;
    color: #3d3b48;
  }
`;
export default SignUpForm;
