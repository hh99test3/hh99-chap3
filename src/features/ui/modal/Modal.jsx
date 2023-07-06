import { css, styled } from "styled-components";

/**
 * @param {string} size The size of Modal
 * @param {children} children The children
 */

export const Modal = ({ size, children }) => {
  return <StyledModal size={size}>{children}</StyledModal>;
};

export const ModalBackgroud = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(221, 221, 221);
  opacity: 0.8;
`;

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  box-sizing: border-box;
  border: none;
  border-radius: 12px;
  background: rgb(255, 255, 255);

  ${(props) =>
    props.size === "large" &&
    css`
      width: 500px;
      height: 300px;
    `}
  ${(props) =>
    props.size === "small" &&
    css`
      width: 300px;
      height: 150px;
    `}
`;

const ModalTitle = styled.div`
  font-size: 1.2rem;
`;

const ModalButtons = styled.div`
  position: absolute;
  bottom: 14px;
  right: 14px;
  display: flex;
  gap: 10px;
`;

Modal.Title = ModalTitle;
Modal.Buttons = ModalButtons;
