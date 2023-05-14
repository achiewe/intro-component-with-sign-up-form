import styled from "styled-components";
import PricingBanner from "./PricingBanner";

const SignUpForm = (): JSX.Element => {
  return (
    <SignUpMain>
      <PricingBanner />
      <Form>
        <label>
          <input type="text" placeholder="First Name" />
        </label>
        <label>
          <input type="text" placeholder="Last Name" />
        </label>
        <label>
          <input type="email" placeholder="Email Address" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <div>
          <button>CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </div>
      </Form>
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

const Form = styled.form`
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
    width: 100%;
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

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      width: 100%;
      padding: 15px 40px;
      border-radius: 5px;
      box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
      background: #38cc8b;
      border: none;
      font-size: 15px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 1px;
      text-align: left;
      color: #ffffff;
    }

    p {
      font-size: 11px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0px;
      text-align: center;
      color: #bab7d4;
      width: 249px;

      span {
        font-size: 11px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: center;
        color: #ff7979;
      }
    }
  }
`;
export default SignUpForm;
