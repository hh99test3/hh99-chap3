import React from "react";
import { styled } from "styled-components";
import { Select } from "./Select";

const Container = styled.div`
  display: flex;

  height: 100px;
  width: 600px;
  border: 2px solid grey;
`;
export const SelectContainer = () => {
  return (
    <Container>
      <Select />
      <Select overflow />
    </Container>
  );
};
