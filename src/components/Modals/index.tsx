import { useDispatch, useSelector } from "react-redux";
import { modalTypes } from "../../store/modals/modalTypes";
import { type AppDispatch, type RootState } from "../../store";
import { closeModal } from "../../store/modals/modalsSlice";

function Modals() {

  const isOpen = useSelector<RootState,boolean>((state) => state.modals.isOpen);
  const dispatch = useDispatch<AppDispatch>();

  const onClose = () => {
    dispatch(closeModal())
  };
  
  return (
    <>
      {Object.entries(modalTypes).map(([key, ModalComponent]) => (
        <ModalComponent key={key} isOpen={isOpen} onClose={onClose} />
      ))}
    </>
  );
}

export default Modals;
