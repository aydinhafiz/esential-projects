import React from "react";
import styled from "styled-components";

export const Scontainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 187px auto;

  .content {
    padding: 32px 32px;
    max-width: 400px;
    background: #161d2f;
    border-radius: 20px;
    margin-left: 850px;
  }

  .login {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: #ffffff;
    margin-bottom: 40px;
  }

  .login-informations {
    margin-bottom: 40px;
  }

  .email {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    margin-bottom: 24px;
    padding-bottom: 17px;
    padding-left: 16px;
    background-color: #161d2f;
    border: none;
    border-bottom: 1px solid #5a698f;
    width: 336px;
  }

  .password {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    padding-bottom: 17px;
    padding-left: 16px;
    background-color: #161d2f;
    border: none;
    border-bottom: 1px solid #5a698f;
    width: 336px;
  }

  .button-for-login {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;

    border: none;
    padding: 14px 95.5px 15px 96.5px;
    background: #fc4747;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 24px;
  }

  .button-for-login:hover {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: #161d2f;

    background: #ffffff;
    border-radius: 6px;
  }

  .dont-have-account {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;

    display: flex;
  }

  .sign-up {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #fc4747;
    padding-left: 9px;
  }
`;
