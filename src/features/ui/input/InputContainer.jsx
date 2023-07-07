import React, { useState } from "react";
import { Input } from "./Input";
import { styled } from "styled-components";
import Button from "../button/Button";

const Container = styled.form`
  display: flex;
  align-items: center;
  position: relative;

  height: 100px;
  width: fit-content;
  gap: 10px;
`;

const Alert = styled.div`
  color: red;
  position: absolute;

  font-size: 0.8rem;
  top: 0;
  right: 0;
`;

export const InputContainer = () => {
  const [input, setInput] = useState({ name: "", price: "" });
  const [isExceeded, setIsExceed] = useState(false);

  const onChange = (e) => {
    let { name, value } = e.target;
    if (name === "name" && value.length > 8) {
      setIsExceed(true);
      return;
    }
    if (name === "price") {
      value = value.replace(/[^\d]/g, ""); //숫자이외 삭제
      if (value.length > 10) {
        setIsExceed(true);
        return;
      }
    }
    isExceeded && setIsExceed(false);
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`name:${input.name}, price:${input.price}`);
  };

  const onShownValueHandler = () => {
    const result = Number(input.price).toLocaleString();
    return result === "0" ? "" : result;
  };
  return (
    <Container>
      <Input
        type="text"
        shownValue={input.name}
        name="name"
        onChange={onChange}
        title={"이름"}
      />
      <Input
        type="text"
        shownValue={onShownValueHandler()}
        name="price"
        onChange={onChange}
        title={"가격"}
      />
      {isExceeded && (
        <Alert>이름은 8자, 가격은 💰10억 원까지 설정이 가능합니다.</Alert>
      )}
      <Button text="제출" color="blue" onClick={onSubmitHandler} />
    </Container>
  );
};
