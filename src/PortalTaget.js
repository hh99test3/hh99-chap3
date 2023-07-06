import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "./redux/modules/modal";
import { LargeModal, SmallModal } from "./features/ui/modal/ModalGroup";

const PortalTarget = () => {
  const modal = useSelector(({ modal }) => modal);
  const dispatch = useDispatch();

  const closePopUpModal = (id) => dispatch(modalClose(id));
  console.log("good!!!!!!");
  return (
    <>
      {modal.large && <LargeModal onRemove={() => closePopUpModal("large")} />}
      {modal.small && <SmallModal onRemove={() => closePopUpModal("small")} />}
    </>
  );
};

export default PortalTarget;
