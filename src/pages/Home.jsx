import { useState } from "react";
import {
  BlueButtonGroup,
  RedButtonGroup,
} from "../features/ui/button/ButtonGroup";
import { ButtonTemplate } from "../features/ui/button/ButtonTemplate";
import ModalButtonGroup from "../features/ui/modal/ModalButtonGroup";
import { LargeModal, SmallModal } from "../features/ui/modal/ModalGroup";
import { ModalTemplate } from "../features/ui/modal/ModalTemplate";
import Portal from "../helpers/Portal";

const Home = () => {
  const [modal, setModal] = useState({});

  const openModalHandler = (id) => setModal({ ...modal, [id]: true });

  const closeModalHandler = (id) => setModal({ ...modal, [id]: false });

  return (
    <>
      <ButtonTemplate>
        <h1>Button</h1>
        <BlueButtonGroup />
        <RedButtonGroup />
      </ButtonTemplate>

      <ModalTemplate>
        <h1>Modal</h1>
        <ModalButtonGroup onModalOpen={openModalHandler} />
        <Portal>
          {modal.large && <LargeModal onModalDown={closeModalHandler} />}
          {modal.small && <SmallModal onModalDown={closeModalHandler} />}
        </Portal>
      </ModalTemplate>
    </>
  );
};

export default Home;
