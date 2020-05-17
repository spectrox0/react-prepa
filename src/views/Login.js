import React from "react";
import Form from "../components/Forms/Login";
import styled from "styled-components";
export default function Login() {
  return (
    <LoginView>
      <div className="container">
        <Form />
      </div>
    </LoginView>
  );
}

const LoginView = styled.div`
  background: url(${require("../assets/images/bg1.jpg")}) no-repeat center;
  background-size: cover;
  display: block;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    z-index: 1;
    height: 100%;
    background: purple;
    opacity: 0.4;
  }
  .container {
    position: relative;
    z-index: 2;
  }
`;
