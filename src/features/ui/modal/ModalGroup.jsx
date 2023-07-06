import Button from "../button/Button";
import { Modal, ModalBackgroud } from "./Modal";

export const LargeModal = ({ onModalDown }) => {
  return (
    <>
      <ModalBackgroud />
      <Modal size="large">
        <Modal.Title>hell0 world</Modal.Title>
        <Modal.Buttons>
          <Button
            text="닫기"
            color="red"
            onClick={() => onModalDown("large")}
          />
          <Button
            text="확인"
            color="blue"
            onClick={() => onModalDown("large")}
          />
        </Modal.Buttons>
      </Modal>
    </>
  );
};

export const SmallModal = ({ onModalDown }) => {
  return (
    <>
      <ModalBackgroud onClick={() => onModalDown("small")} />
      <Modal size="small">
        <Modal.Title>hell0 world2</Modal.Title>
        <Modal.Buttons>
          <Button
            text="닫기"
            color="red"
            onClick={() => onModalDown("small")}
          />
        </Modal.Buttons>
      </Modal>
    </>
  );
};
