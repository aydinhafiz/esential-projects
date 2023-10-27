import styled from "styled-components";

export const SOurWord = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  .our-word-img {
    border-radius: 8px;
  }

  .our-word-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 540px;
    margin-left: 125px;
  }

  .our-word-title {
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 32px;
  }

  .our-word-description {
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;