import styled from "styled-components";
import { useForm } from "react-hook-form";
import PricingBanner from "./PricingBanner";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import inputTypes from "../components/type";
import inconError from "../images/icon-error.svg";

const SignUpForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: inputTypes) => {
    console.log(data);
  };
  return (
    <SignUpMain>
      <PricingBanner />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
          />
          <img src={inconError} alt="error icon" />
          <p>{errors.firstName?.message} </p>
        </label>
        <label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
          />
          <img src={inconError} alt="error icon" />
          <p>{errors.lastName?.message} </p>
        </label>
        <label>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
          />
          <img src={inconError} alt="error icon" />
          <p>{errors.email?.message} </p>
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <img src={inconError} alt="error icon" />
          <p>{errors.password?.message} </p>
        </label>
        <div>
          <button>CLAIM YOUR FREE TRIAL</button>
          <p className="p-click">
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

const Form = styled.form<{}>`
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    gap: 6px;
    position: relative;
  }

  img {
    position: absolute;
    top: 15px;
    right: 10px;
    display: block;
  }

  input {
    width: 100%;
    padding: 15px 0 15px 19.41px;
    border: 1px solid #dedede;
    border-radius: 5px;
    /* border: ${(props) =>
      props.onSubmit ? "1px solid #dedede" : "2px solid #FF7979"}; */
  }

  p {
    font-size: 11px;
    font-style: italic;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: right;
    color: #ff7979;
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

    .p-click {
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
