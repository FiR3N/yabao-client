import React, {
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { UserActions } from "../../../../hooks/useActions";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";
import MyLabel from "../../../UI/MyLabel/MyLabel";
import MyModal from "../../../UI/MyModal/MyModal";
import cls from "./AuthModal.module.scss";

interface AuthModalProps {
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const AuthModal: FC<AuthModalProps> = ({ setActive }) => {
  const { login, reg, setAuthError } = UserActions();
  const { error } = useTypeSelector((state) => state.userReducer);

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [formValid, setFormValid] = useState(false);

  //warning!!! closure
  const formHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLogin) {
      if (email && password) {
        await login(email, password);
        if (!error) {
          setFormValid(true);
        }
      } else setAuthError("Пароль и почта не может быть пустой!");
    } else {
      if (email && password && repeatedPassword && name && surname && phone) {
        reg(email, password, repeatedPassword, name, surname, phone);
      } else setAuthError("Все поля должны быть заполнены");
    }
  };

  useEffect(() => {
    console.log("effect", error);
    if (formValid && !error) {
      window.location.reload();
    }
  }, [formValid, error]);

  return (
    <MyModal closeMethod={setActive}>
      <form className={cls.authModal}>
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
      </form>
    </MyModal>
  );
};

export default AuthModal;
