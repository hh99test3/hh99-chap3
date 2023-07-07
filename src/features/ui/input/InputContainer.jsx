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
    console.log(e.nativeEvent.data);
    let temp_value = "";
    if (e.nativeEvent.data !== null) {
      //입력 기능
      temp_value = Number(
        shownNumber.concat(e.nativeEvent.data).replace(/[^\d]/g, "")
      );
    } else {
      //지우기 기능
      temp_value = Number(
        shownNumber.slice(0, shownNumber.length - 1).replace(/[^\d]/g, "")
      );
    }

    setInput({ ...input, price: temp_value }); //실제 값 수정
    setShownNumber(temp_value.toLocaleString()); //콤마붙인 shown값 수정
    if (shownNumber === "0") {
      //0이면 지워주기
      setShownNumber("");
    }
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
        shownValue={shownNumber}
        name="price"
        onChange={onChangePrice}
        title={"가격"}
      />
      <button onClick={onSubmitHandler}>민승's 저장버튼예정지</button>
    </Container>
  );
};
