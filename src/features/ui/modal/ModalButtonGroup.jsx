import { styled } from "styled-components";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../../redux/modules/modal";

const ModalButtonGroup = () => {
  const dispatch = useDispatch();
  const openPopUpModal = (id) => dispatch(modalOpen(id));

  return (
    <StyledModalButtonGroup>
      <Button
        text="open modal"
        color="blue"
        onClick={() => openPopUpModal("large")}
      />
      <Button
        text="open modal"
        color="red"
        size="large"
        onClick={() => openPopUpModal("small")}
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
