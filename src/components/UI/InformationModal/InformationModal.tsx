import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import cls from "./InformationModal.module.scss";
import ReactDOM from "react-dom";
interface InformationModalProps {
  children: ReactNode;
  status: InformationModalStatus;
  // closeMethod: Dispatch<SetStateAction<boolean>>;
}

enum InformationModalStatus {
  success,
  error,
}

const InformationModal: FC<InformationModalProps> = ({
  children,
  status,
  // closeMethod,
}) => {
  const modalRoot = document.getElementById("modal-root") as Element;
  return ReactDOM.createPortal(
    <div
      className={`${status == 0 ? cls.success : cls.error} ${
        cls.informationModal
      }`}
    >
      <div
        className={cls.informationModalCloseBut}
        // onClick={() => closeMethod(false)}
      >
        <span className={cls.bar}></span>
        <span className={cls.bar}></span>
      </div>
      <p className={cls.informationModalText}>{children}</p>
    </div>,
    modalRoot
  );
};

export default InformationModal;
