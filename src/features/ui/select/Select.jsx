import React, { useCallback, useState } from "react";
import { DropDown, DropDownOpen, DropDownContainer } from "./SelectStyle";

export const Select = ({ overflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState("리엑트");

  const onSelectHandler = useCallback((e) => {
    setDisplayName(e.target.innerText);
    setIsOpen(false);
  }, []);

  return (
    <DropDownContainer {...(overflow ? { overflow } : {})}>
      <DropDown
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{displayName}</span>
        <div>▼</div>
      </DropDown>
      {isOpen ? (
        <DropDownOpen>
          <DropDown Inner onClick={onSelectHandler}>
            리엑트
          </DropDown>
          <DropDown Inner onClick={onSelectHandler}>
            자바
          </DropDown>
          <DropDown Inner onClick={onSelectHandler}>
            스프링
          </DropDown>
          <DropDown Inner onClick={onSelectHandler}>
            노드
          </DropDown>
        </DropDownOpen>
      ) : (
        ""
      )}
    </DropDownContainer>
  );
};
