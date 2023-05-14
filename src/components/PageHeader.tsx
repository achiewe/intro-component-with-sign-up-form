import styled from "styled-components";

const PageHeader = (): JSX.Element => {
  return (
    <HeaderDiv>
      <h1> Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  width: 100%;
  max-width: 525px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media (min-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.2916666865348816px;
    text-align: center;
    color: #ffffff;
    @media (min-width: 1024px) {
      font-size: 50px;
      font-weight: 700;
      line-height: 55px;
      letter-spacing: -0.5208333134651184px;
      text-align: left;
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    color: #ffffff;
    @media (min-width: 1024px) {
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
`;

export default PageHeader;
