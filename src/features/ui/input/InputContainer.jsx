import React, { useState } from "react";
import { Input } from "./Input";
import { styled } from "styled-components";

const Container = styled.form`
  display: flex;
  align-items: center;
`;

export const InputContainer = () => {
  const [input, setInput] = useState({ name: "", price: "" });
  const [shownNumber, setShownNumber] = useState("");

  const onChangePrice = (e) => {
    const temp_value = Number(
      shownNumber.concat(e.nativeEvent.data).replace(/[^\d]/g, "")
    );
    setInput({ ...input, price: temp_value });
    setShownNumber(temp_value.toLocaleString());
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = () => {
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
        shownValue={shownNumber}
        name="price"
        onChange={onChangePrice}
        title={"가격"}
      />
      <button onClick={onSubmitHandler}>민승's 저장버튼예정지</button>
    </Container>
  );
};
