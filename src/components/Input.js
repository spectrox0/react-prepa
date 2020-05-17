import React from "react";
import styled from "styled-components";
export default function Input({
  label,
  name,
  id,
  type,
  value,
  onChange,
  onBlur,
}) {
  return (
    <StyleInput>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        required
        autocomplete="off"
        required
        onBlur={onBlur}
        placeholder={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </StyleInput>
  );
}
const StyleInput = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;

  label {
    font-size: 1em;
    font-weight: 600;
    color: white;
    margin: 0.3rem;
    cursor: pointer;
  }
  input {
    background: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    color: white;
    border: solid 2px white;
    border-radius: 500px;
    transition: all ease-in-out 0.5s;
    opacity: 0.8;
    margin: 0.3rem;
    padding: 0.3rem 0.5rem;

    &:focus {
      opacity: 1;
      outline: none;
      box-shadow: none;
    }
  }
`;
