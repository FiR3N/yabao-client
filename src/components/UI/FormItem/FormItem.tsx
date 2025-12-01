import { FC } from "react";
import cls from "./FormItem.module.scss";
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";
import { IAccount } from "../../../models/validators/IAccount";

interface FormItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: React.ReactNode;
  register: any;
  errors: FieldError | undefined;
}

const FormItem: FC<FormItemProps> = ({
  labelName,
  register,
  errors,
  ...props
}) => {
  return (
    <label
      className={
        Boolean(errors)
          ? `${cls.formItemError} ${cls.formItem}`
          : `${cls.formItem}`
      }
    >
      {labelName}
      <input className={cls.formItemInput} {...register} {...props} />
      <p>{errors?.message}</p>
    </label>
  );
};

export default FormItem;
