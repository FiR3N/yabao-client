import React, { FC } from "react";
import cls from "./MyTextArea.module.scss";

interface MyTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MyTextArea: FC<MyTextAreaProps> = ({ onChange, ...props }) => (
  <textarea className={cls.myTextArea} onChange={onChange} {...props} />
);

export default MyTextArea;
