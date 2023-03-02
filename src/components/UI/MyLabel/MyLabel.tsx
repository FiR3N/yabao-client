import React, { FC } from "react";
import cls from "./MyLabel.module.scss";

interface MyLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const MyLabel: FC<MyLabelProps> = ({ children, ...props }) => {
  return (
    <label className={cls.myLabel} {...props}>
      {children}
    </label>
  );
};

export default MyLabel;
