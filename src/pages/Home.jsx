import {
  BlueButtonGroup,
  RedButtonGroup,
} from "../features/ui/button/ButtonGroup";
import { ButtonTemplate } from "../features/ui/button/ButtonTemplate";
import ModalButtonGroup from "../features/ui/modal/ModalButtonGroup";
import { ModalTemplate } from "../features/ui/modal/ModalTemplate";

const Home = () => {
  return (
    <>
      <ButtonTemplate>
        <h1>Button</h1>
        <BlueButtonGroup />
        <RedButtonGroup />
      </ButtonTemplate>
      <ModalTemplate>
        <h1>Modal</h1>
        <ModalButtonGroup />
      </ModalTemplate>
    </>
  );
};

export default Home;
