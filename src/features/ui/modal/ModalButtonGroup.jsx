import { styled } from "styled-components";
import Button from "../button/Button";

const ModalButtonGroup = ({ onModalOpen }) => {
  return (
    <StyledModalButtonGroup>
      <Button
        text="open modal"
        color="blue"
        onClick={() => onModalOpen("large")}
      />
      <Button
        text="open modal"
        color="red"
        size="large"
        onClick={() => onModalOpen("small")}
        primary="true"
      />
    </StyledModalButtonGroup>
  );
};

const StyledModalButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default ModalButtonGroup;
