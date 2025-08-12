import type { ComponentType } from "react";
import CheckoutModal from "../../components/Modals/CheckoutModal";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalTypes {
  [key: string]: ComponentType<ModalProps>;
}

export const modalTypes: ModalTypes = {
  checkout: CheckoutModal
};
