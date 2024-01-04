import styled from "styled-components";

export const SSteps = styled.div`
  display: flex;
  padding: 80px 85px 64px 84px;
  border-radius: 10px;
  @media only screen and (max-width: 900px) {
    padding: 55px 40px 46px 39px;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    padding: 80px 25px 80px 24px;
  }

  ${(props) => {
    if (props.type === "dark") {
      return `background-color:#2C343E;`;
    }
  }}
`;
