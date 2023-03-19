import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../components/UI/MainLayout/MainLayout";
import MyButton from "../../components/UI/MyButton/MyButton";
import { UserActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import cls from "./Account.module.scss";

interface AccountProps {}

const Account: FC<AccountProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { logout } = UserActions();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/", { replace: true });
  };
  return (
    <MainLayout title="Профиль">
      <div className={cls.account}>
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
