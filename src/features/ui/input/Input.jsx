import { styled } from "styled-components";

const InputBox = styled.input`
  height: 40px;
  width: 200px;

  padding-left: 12px;
  padding-right: 12px;

  outline: none;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin: 10px;
`;
/**
 *
 * @param {string} type text, number, email등
 * @param {function} onChange onChange 함수
 * @param {string} shownValue 보여질 값
 * @param {string} name 해당 input의 name(key)
 * @param {string} title 보여지는 이름
 * @returns 예쁜 input 창을 돌려줍니다. 와~ 🫠
 */
export const Input = ({ type, onChange, name, shownValue, title }) => {
  return (
    <>
      <Label htmlFor={name}>{title}</Label>
      <InputBox
        type={type}
        name={name}
        value={shownValue}
        onChange={onChange}
      />
    </>
  );
};
