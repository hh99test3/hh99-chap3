import React from "react";

export const SelectInner = () => {
  const [displayName, setDisplayName] = useState("리엑트");
  const onSelectHandler = useCallback((e) => {
    setDisplayName(e.target.innerText);
    setIsOpen(false);
  }, []);
  return (
    <>
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
    </>
  );
};
