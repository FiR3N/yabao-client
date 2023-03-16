import React, { FC, SetStateAction } from "react";
import cls from "./MyModal.module.scss";
import ReactDOM from "react-dom";
interface MyModalProps {
  children: React.ReactNode;
  closeMethod: React.Dispatch<SetStateAction<boolean>>;
}

const MyModal: FC<MyModalProps> = ({ children, closeMethod }) => {
  const modalRoot = document.getElementById("modal-root") as Element;
  const closeOnBgHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget != e.target) return;
    closeMethod(false);
  };
  const closeOnButHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    closeMethod(false);
  };
  return ReactDOM.createPortal(
    <div className={cls.myModal} onClick={closeOnBgHandler}>
      <div className={cls.myModalContent}>
        <div className={cls.myModalCloseBut} onClick={closeOnButHandler}>
          <span className={cls.bar}></span>
          <span className={cls.bar}></span>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default MyModal;
