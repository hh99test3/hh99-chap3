import React, { useState } from "react";
import { Input } from "./Input";
import { styled } from "styled-components";

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = () => {
  const [input, setInput] = useState({ name: "", price: "" });
  const [shownValue, setShownValue] = useState("");

  const onChangePrice = (e) => {
    console.log(e.nativeEvent.data);
    // if (e.target.name == "price" && /\d/.test(e.target.data)) {
    const temp_value = Number(
      shownValue.concat(e.nativeEvent.data).replace(/[^\d]/g, "")
    );
    setInput({ ...input, [e.target.name]: temp_value });
    setShownValue(temp_value.toLocaleString());
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = () => {
    alert(`name:${input.name}, price:${input.price}`);
  };

  const num = "123456";
  console.log(num.toLocaleString());
  return (
    <Container>
      <Input
        type="text"
        shownValue={input.name}
        name="name"
        onChange={onChange}
      />
      <Input
        type="text"
        shownValue={shownValue}
        name="price"
        onChange={onChangePrice}
        isNumber
      />
      <button onClick={onSubmitHandler}>저장버튼예정지</button>
    </Container>
  );
};
// setInput(...input, name: e.target.value.toLocaleString() );
