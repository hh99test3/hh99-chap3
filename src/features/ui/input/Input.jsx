import React, { useState } from "react";
import { styled } from "styled-components";

const InputBox = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const Input = ({ type, onChange, name, shownValue, isNumber }) => {
  const [value, setValue] = useState({});

  return (
    <>
      <label htmlFor="title">이름변수</label>
      <InputBox
        type={type}
        name={name}
        value={shownValue}
        onChange={onChange}
      ></InputBox>
    </>
  );
};
