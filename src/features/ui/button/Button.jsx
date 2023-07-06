import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css, styled } from "styled-components";

/**
 * @param {string} color (red, blue)
 * @param {boolean} primary true 면 primary false 기본 상태
 * @param {string} size (large , medium , small) default : small
 * @param {string} text button inner text
 * @param {object} icon button inner icon
 * @param {object} onClick onClick Handler
 */

const Button = ({ text, icon, color, size, primary, onClick }) => {
  return (
    <StyledButton color={color} size={size} primary={primary} onClick={onClick}>
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  //default style (size : small primary : false)

  height: 40px;
  width: 100px;
  border-radius: 8px;
  cursor: pointer;

  //when Button is hover event

  &:active {
    filter: brightness(80%);
  }

  //custom styles
  ${(props) =>
    props.color === "red" &&
    css`
      border: 3px solid rgb(250, 177, 160);
      background: rgb(250, 177, 160);
      color: rgb(214, 48, 49);
    `};
  ${(props) =>
    props.color === "blue" &&
    css`
      border: 3px solid rgb(85, 239, 196);
      background: rgb(85, 239, 196);
      color: rgb(0, 0, 0);
    `};
  ${(props) =>
    props.primary &&
    css`
      background: #fff;
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      width: 200px;
      height: 50px;
      font-weight: bold;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 130px;
      height: 45px;
    `}
`;

export default Button;
