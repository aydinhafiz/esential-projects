import styled from "styled-components";

export const SStep = styled.div`
  max-width: 406px;
  padding-top: 80px;

  @media only screen and (max-width: 900px) {
    padding-top: 48px;
  }
  position: relative;

  @media only screen and (max-width: 400px) {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${(props) => {
    if (props.type === "dark") {
      return `background-color:#2C343E;`;
    }
  }}

  &::before {
    content: "";
    height: 31px;
    width: 31px;
    border: 2px solid #0e8784;
    border-radius: 50%;
    position: absolute;
    top: 0;

    @media only screen and (max-width: 900px) {
      left: 0;
    }

    @media only screen and (max-width: 400px) {
      display: none;
    }

    ${(props) => {
      if (props.type === "dark") {
        return `background: #2C343E;`;
      }
      if (props.type === "light") {
        return `background: #fefcf7;`;
      }
    }}
  }

  &:not(:last-child) {
    padding-right: 95px;
    @media only screen and (max-width: 900px) {
      padding-right: 10px;
    }
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 17px;
    left: 35px;
    background: #fdd6ba;

    @media only screen and (max-width: 900px) {
      width: 202px;
    }

    @media only screen and (max-width: 400px) {
      display: none;
    }
  }

  .step-num {
    display: inline-block;

    color: #fdd6ba;
    font-family: "Fraunces";
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;

    margin-bottom: 38px;

    @media only screen and (max-width: 900px) {
      margin-bottom: 42px;
    }
  }

  .step-title {
    color: #333d4b;
    font-family: "Fraunces";
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 36px;

    width: 255px;
    margin-bottom: 42px;

    @media only screen and (max-width: 900px) {
      color: #333d4b;
      font-family: "Fraunces";
      font-size: 28px;
      font-weight: 900;
      line-height: 32px;

      width: 229px;
      margin-bottom: 38px;
    }

    @media only screen and (max-width: 400px) {
      text-align: center;
      width: 400px;
      margin-bottom: 24px;
    }

    ${(props) => {
      if (props.type === "dark") {
        return `color: #FEFCF7;`;
      }
      if (props.type === "light") {
        return `background: #fefcf7;`;
      }
    }}
  }

  .step-description {
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

    width: 285px;

    @media only screen and (max-width: 900px) {
      color: #333d4b;
      font-family: "Barlow";
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      width: 223px;
    }

    @media only screen and (max-width: 400px) {
      width: 400px;
      text-align: center;
    }

    ${(props) => {
      if (props.type === "dark") {
        return `color: #FEFCF7;`;
      }
      if (props.type === "light") {
        return `background: #fefcf7;`;
      }
    }}
  }
`;
