import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormItem from "../../../components/UI/FormItem/FormItem";
import MainLayout from "../../../components/UI/MainLayout/MainLayout";
import MyButton from "../../../components/UI/MyButton/MyButton";
import { UserActions } from "../../../hooks/useActions";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { IAccount } from "../../../models/validators/IAccount";

interface AccountSettingsProps {}

const AccountSettings: FC<AccountSettingsProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { userUpdate } = UserActions();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IAccount>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IAccount> = (data) => {
    reset();
    userUpdate(user.id, data.name, data.surname, data.phone);
  };

  return (
    <MainLayout title="Личные данные">
      {isSubmitSuccessful && (
        <div className="success-info">Пользователь обновлен!</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem
          labelName="Имя"
          register={register("name", {
            value: user.name,
            required: "Имя должно быть больше 2 но меньше 32 символов",
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]{3,32}/,
              message: "Имя должно быть больше 2 но меньше 32 символов",
            },
          })}
          errors={errors.name}
          type="text"
        />
        <FormItem
          labelName="Фамилия"
          register={register("surname", {
            value: user.surname,
            required: "Фамилия должна быть больше 2 но меньше 32 символов",
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]{3,32}/,
              message: "Фамилия должна быть больше 2 но меньше 32 символов",
            },
          })}
          errors={errors.surname}
          type="text"
        />
        <FormItem
          labelName="Телефон"
          register={register("phone", {
            value: user.phone,
            required: "Телефон не может быть пустым",
            pattern: {
              value: /\+7[0-9]{9}/,
              message: "Неверый формат телефона(+7_______)",
            },
          })}
          errors={errors.phone}
          type="phone"
        />
        <MyButton>Обновить данные</MyButton>
      </form>
    </MainLayout>
  );
};

export default AccountSettings;
