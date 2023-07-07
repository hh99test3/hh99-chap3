import React, { useCallback, useState } from "react";
import {
  DropDown,
  DropDownOpen,
  DropDownContainer,
  Message,
} from "./SelectStyle";
/**
 *
 * @param {boolean} overflow overflow를 써주면 hidden 활성화
 * @returns 다용도 select 창을 돌려줍니다. 와~ 🫠
 */
export const Select = ({ overflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState("리엑트");
  const [isMessageShowing, setIsMessageShowing] = useState(false);
  const [fade, setFade] = useState(true);

  const onSelectHandler = useCallback((e) => {
    setDisplayName(e.target.innerText);
    setIsMessageShowing(true);
    setFade(false);
    setIsOpen(false);

    setTimeout(() => {
      setIsMessageShowing(false);
      setFade(true);
    }, 1000);
  }, []);
  return (
    <DropDownContainer {...(overflow ? { overflow } : {})}>
      <DropDown
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{!isMessageShowing && displayName}</span>
        <Message className={fade ? "hide" : ""}>
          어머! {displayName}라니! 멋져요!
        </Message>
        <div>▼</div>
      </DropDown>
      {isOpen ? (
        <DropDownOpen>
          <DropDown inner="true" onClick={onSelectHandler}>
            리엑트
          </DropDown>
          <DropDown inner="true" onClick={onSelectHandler}>
            자바
          </DropDown>
          <DropDown inner="true" onClick={onSelectHandler}>
            스프링
          </DropDown>
          <DropDown inner="true" onClick={onSelectHandler}>
            노드
          </DropDown>
        </DropDownOpen>
      ) : null}
    </DropDownContainer>
  );
};
