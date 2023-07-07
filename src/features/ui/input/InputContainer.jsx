import React, { useState } from "react";
import { Input } from "./Input";
import { styled } from "styled-components";
import Button from "../button/Button";

const Container = styled.form`
  display: flex;
  align-items: center;
`;

export const InputContainer = () => {
  const [input, setInput] = useState({ name: "", price: "" });

  const onChangePrice = (e) => {
    const temp_value = e.target.value.replace(/[^\d]/g, ""); //숫자이외 삭제
    setInput({ ...input, price: Number(temp_value) }); //string->number
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`name:${input.name}, price:${input.price}`);
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
        shownValue={input.price.toLocaleString()}
        name="price"
        onChange={onChangePrice}
        title={"가격"}
      />
      <Button text="제출" color="blue" onClick={onSubmitHandler} />
    </Container>
  );
};
