import React, { FC, SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm, Validate } from "react-hook-form";
import { UserActions } from "../../../../hooks/useActions";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import { IUser } from "../../../../models/IUser";
import { IAccount } from "../../../../models/validators/IAccount";
import FormItem from "../../../UI/FormItem/FormItem";
import MyButton from "../../../UI/MyButton/MyButton";
import MyModal from "../../../UI/MyModal/MyModal";
import cls from "./AuthModal.module.scss";

interface AuthModalProps {
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const AuthModal: FC<AuthModalProps> = ({ setActive }) => {
  const { login, reg, clearUserError } = UserActions();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    getValues,
  } = useForm<IAccount>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IAccount> = async (data) => {
    if (isLogin) {
      await login(data.email as string, data.password as string);
    } else {
      await reg(
        data.email as string,
        data.password as string,
        data.repeatedPassword as string,
        data.name,
        data.surname,
        data.phone
      );
    }
  };

  const { error } = useTypeSelector((state) => state.userReducer);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const validatePassword: Validate<string | undefined, IAccount> = (
    value: string | undefined
  ) => {
    const { password } = getValues();
    return value === password || "Пароли должны совпадать";
  };

  const handleClose = () => {
    clearUserError();
    setActive(false);
  };

  useEffect(() => {
    if (isSubmitSuccessful && !error) {
      setActive(false);
    }
  }, [isSubmitSuccessful, error]);

  return (
    <MyModal closeMethod={handleClose}>
      <form className={cls.authModal} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={cls.authModalTitle}>
          {isLogin ? "Вход на сайт" : "Регистрация"}
        </h2>
        {error && <p className="error-message">{error}</p>}
        <FormItem
          labelName="Почта"
          register={register("email", {
            required: "Почта не может быть пустой",
            pattern: {
              value:
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              message: "Неверный формат почты",
            },
          })}
          errors={errors.email}
          placeholder="Введите почту..."
          type="text"
        />
        {!isLogin && (
          <>
            <FormItem
              labelName="Телефон"
              register={register("phone", {
                required: "Телефон не может быть пустым",
                pattern: {
                  value: /\+7[0-9]{9}/,
                  message: "Неверый формат телефона(+7_______)",
                },
              })}
              errors={errors.phone}
              placeholder="Введите телефон..."
              type="phone"
            />
            <FormItem
              labelName="Имя"
              register={register("name", {
                required: "Имя должно быть больше 2 но меньше 32 символов",
                pattern: {
                  value: /[A-Za-zА-Яа-яЁё]{3,32}/,
                  message: "Имя должно быть больше 2 но меньше 32 символов",
                },
              })}
              errors={errors.name}
              placeholder="Введите имя..."
              type="text"
            />
            <FormItem
              labelName="Фамилия"
              register={register("surname", {
                required: "Фамилия должна быть больше 2 но меньше 32 символов",
                pattern: {
                  value: /[A-Za-zА-Яа-яЁё]{3,32}/,
                  message: "Фамилия должна быть больше 2 но меньше 32 символов",
                },
              })}
              errors={errors.surname}
              placeholder="Введите фамилию..."
              type="text"
            />
          </>
        )}

        <FormItem
          labelName="Пароль"
          register={register("password", {
            required: "Пароль не может быть пустым",
            pattern: {
              value: /^(?=.*[A-Za-z])[A-Za-z\d]{3,32}$/,
              message: "Пароль должень быть от 3 до 32 символов",
            },
          })}
          errors={errors.password}
          placeholder="Введите пароль..."
          type="password"
        />
        {!isLogin && (
          <FormItem
            labelName="Повторный пароль"
            register={register("repeatedPassword", {
              required: "Данное поле не может быть пустым",
              pattern: {
                value: /^(?=.*[A-Za-z])[A-Za-z\d]{3,32}$/,
                message: "Пароли должны совпадать",
              },
              validate: validatePassword,
            })}
            errors={errors.repeatedPassword}
            placeholder="Введите пароль..."
            type="password"
          />
        )}

        <MyButton>{isLogin ? "Войти" : "Зарегистрироваться"}</MyButton>
        {isLogin ? (
          <p className="gray-text">
            Впервые на сайте?{" "}
            <span className="pink-text" onClick={() => setIsLogin(false)}>
              Зарегистрируйтесь
            </span>
          </p>
        ) : (
          <p className="gray-text">
            Уже зарегистрированы на нашем сайте?{" "}
            <span className="pink-text" onClick={() => setIsLogin(true)}>
              Войти
            </span>
          </p>
        )}
      </form>
    </MyModal>
  );
};

export default AuthModal;
