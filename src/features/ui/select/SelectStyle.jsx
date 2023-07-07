import { styled } from "styled-components";

export const DropDown = styled.button`
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: ${(prop) => (prop.Inner ? 0 : 1)}px solid rgb(221, 221, 221);

  height: 38px;
  width: 242px;
  margin: 0;
  background-color: rgb(255, 255, 255);
  border-radius: ${(prop) => (prop.Inner ? 0 : 12)}px;
  &:hover {
    background-color: ${(prop) => (prop.Inner ? "rgb(230, 230, 230)" : "")};
  }
`;

export const DropDownOpen = styled.div`
  border: 1px solid rgb(221, 221, 221);
  width: 242px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  overflow: hidden;
  padding: 0;
`;

export const DropDownContainer = styled.div`
  overflow: ${(prop) => (prop.overflow ? "hidden" : "")};
`;
