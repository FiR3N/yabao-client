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
  const { login, reg } = UserActions();
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
    // UserService.updateUserById(user.id, data.name, data.surname, data.phone);
  };

  const { error } = useTypeSelector((state) => state.userReducer);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const validatePassword: Validate<string | undefined, IAccount> = (
    value: string | undefined
  ) => {
    const { password } = getValues();
    return value === password || "Пароли должны совпадать";
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [repeatedPassword, setRepeatedPassword] = useState("");

  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [phone, setPhone] = useState("");
  // const [formValid, setFormValid] = useState(false);

  //warning!!! closure
  // const formHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   if (isLogin) {
  //     if (email && password) {
  //       await login(email, password);
  //       if (!error) {
  //         setFormValid(true);
  //       }
  //     } else setAuthError("Пароль и почта не может быть пустой!");
  //   } else {
  //     if (email && password && repeatedPassword && name && surname && phone) {
  //       reg(email, password, repeatedPassword, name, surname, phone);
  //     } else setAuthError("Все поля должны быть заполнены");
  //   }
  // };
  useEffect(() => {
    if (isSubmitSuccessful && !error) {
      window.location.reload();
    }
  }, [isSubmitSuccessful, error]);

  return (
    <MyModal closeMethod={setActive}>
      {/* <form className={cls.authModal}>
        <h2 className={cls.authModalTitle}>
          {isLogin ? "Вход на сайт" : "Регистрация"}
        </h2>
        {error && <p className="error-text">{error}</p>}
        <div className={cls.authModalItem}>
          <MyLabel>Почта:</MyLabel>
          <MyInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Введите вашу почту..."
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>
        {!isLogin && (
          <div className={cls.authModalItem}>
            <MyLabel>Телефон:</MyLabel>
            <MyInput
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
              placeholder="Введите ваш телефон..."
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
            />
          </div>
        )}
        {!isLogin && (
          <div className={cls.authModalItem}>
            <MyLabel>Имя:</MyLabel>
            <MyInput
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Введите ваше имя..."
            />
          </div>
        )}
        {!isLogin && (
          <div className={cls.authModalItem}>
            <MyLabel>Фамилия:</MyLabel>
            <MyInput
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.currentTarget.value)}
              placeholder="Введите вашу фамилию..."
            />
          </div>
        )}
        <div className={cls.authModalItem}>
          <MyLabel>Пароль:</MyLabel>
          <MyInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Введите ваш пароль..."
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          />
        </div>
        {!isLogin && (
          <div className={cls.authModalItem}>
            <MyLabel>Подтвердите пароль:</MyLabel>
            <MyInput
              type="password"
              value={repeatedPassword}
              onChange={(e) => setRepeatedPassword(e.currentTarget.value)}
              placeholder="Введите ваш пароль второй раз..."
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
            />
          </div>
        )}
        <MyButton onClick={formHandler}>Войти</MyButton>
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
      </form> */}
      <form className={cls.authModal} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={cls.authModalTitle}>
          {isLogin ? "Вход на сайт" : "Регистрация"}
        </h2>
        {error && <p className="error-text">{error}</p>}
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
          type="text"
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
            type="text"
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
