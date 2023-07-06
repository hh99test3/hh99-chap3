import Button from "../button/Button";
import { Modal, ModalBackgroud } from "./Modal";

export const LargeModal = ({ onRemove }) => {
  return (
    <>
      <ModalBackgroud />
      <Modal size="large">
        <Modal.Title>hell0 world</Modal.Title>
        <Modal.Buttons>
          <Button text="닫기" color="red" onClick={onRemove} />
          <Button text="확인" color="blue" onClick={onRemove} />
        </Modal.Buttons>
      </Modal>
    </>
  );
};

export const SmallModal = ({ onRemove }) => {
  return (
    <>
      <ModalBackgroud onClick={onRemove} />
      <Modal size="small">
        <Modal.Title>hell0 world2</Modal.Title>
        <Modal.Buttons>
          <Button text="닫기" color="red" onClick={onRemove} />
        </Modal.Buttons>
      </Modal>
    </>
  );
};
