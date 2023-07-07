import { styled } from "styled-components";

export const DropDown = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 38px;
  width: 242px;
  padding: 0px 30px;

  border: ${(prop) => (prop.inner ? 0 : 1)}px solid rgb(221, 221, 221);
  border-radius: ${(prop) => (prop.inner ? 0 : 12)}px;

  background-color: rgb(255, 255, 255);
  &:hover {
    background-color: ${(prop) => (prop.inner ? "rgb(230, 230, 230)" : "")};
  }
`;

export const DropDownOpen = styled.div`
  width: 242px;
  padding: 0;

  overflow: hidden;

  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;

  background-color: rgb(255, 255, 255);
`;

export const DropDownContainer = styled.div`
  overflow: ${(prop) => (prop.overflow ? "hidden" : "")};
`;
