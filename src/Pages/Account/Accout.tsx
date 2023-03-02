import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormItem from "../../components/UI/FormItem/FormItem";
import MainLayout from "../../components/UI/MainLayout/MainLayout";
import MyButton from "../../components/UI/MyButton/MyButton";
import { UserActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { IUser } from "../../models/IUser";
import { IAccount } from "../../models/validators/IAccount";
import UserService from "../../services/UserService";
import cls from "./Account.module.scss";

interface AccountProps {}

const Account: FC<AccountProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { logout } = UserActions();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IAccount>({ mode: "onChange" });
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [phone, setPhone] = useState("");

  // const navigate = useNavigate();

  // const exitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   UserService.logout();
  // };

  const onSubmit: SubmitHandler<IAccount> = (data) => {
    reset();
    UserService.updateUserById(user.id, data.name, data.surname, data.phone);
  };

  const logoutHandler = () => {
    logout();
    navigate("/", { replace: true });
  };
  return (
    <MainLayout title="Профиль">
      <div className={cls.account}>
        {/* {isSubmitSuccessful && <p>Пользователь обновлен!</p>}
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
          <MyButton>Выйти</MyButton>
        </form> */}
        <div className={cls.accountData}>
          <div className={cls.accountUser}>
            <p className={cls.accountUserName}>
              {user.name} {user.surname}
            </p>
            <p className={cls.accountUserEmail}>
              <span className="bold">Почта: </span>
              {user.email}
            </p>
            <p className={cls.accountUserPhone}>
              <span className="bold">Телефон: </span>
              {user.phone}
            </p>
          </div>
          <div className={cls.accountButtons}>
            <Link to="settings">
              <MyButton>Редактировать</MyButton>
            </Link>
            <MyButton onClick={logoutHandler}>Выйти</MyButton>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Account;
