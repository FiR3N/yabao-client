import { FC, ReactNode, useEffect } from "react";
import cls from "./InformationModal.module.scss";
import ReactDOM from "react-dom";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { BasketActions } from "../../../hooks/useActions";
interface InformationModalProps {
  children: ReactNode;
  status: InformationModalStatus;
}

enum InformationModalStatus {
  success,
  error,
}

const InformationModal: FC<InformationModalProps> = ({ children, status }) => {
  const modalRoot = document.getElementById("modal-root") as Element;
  const { orderSuccess } = useTypeSelector((state) => state.basketReducer);
  const { setOrderSuccess } = BasketActions();
  useEffect(() => {
    orderSuccess &&
      setTimeout(() => {
        setOrderSuccess(false);
      }, 3000);
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`${status == 0 ? cls.success : cls.error} ${
        cls.informationModal
      }`}
    >
      {/* <div
        className={cls.informationModalCloseBut}
        // onClick={() => closeMethod(false)}
      >
        <span className={cls.bar}></span>
        <span className={cls.bar}></span>
      </div> */}
      <p className={cls.informationModalText}>{children}</p>
    </div>,
    modalRoot
  );
};

export default InformationModal;
