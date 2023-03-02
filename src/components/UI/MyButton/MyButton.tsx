import React, { FC } from "react";
import cls from "./MyButton.module.scss";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: FC<MyButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button className={cls.myButton} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
