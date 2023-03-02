import React, { FC, memo, useCallback, useMemo } from "react";
import cls from "./MyInput.module.scss";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({ onChange, ...props }) => {
  return <input className={cls.myInput} onChange={onChange} {...props} />;
};

export default MyInput;
