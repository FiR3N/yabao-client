import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import cls from "./HeaderLinksUserInfo.module.scss";
import userImg from "../../../../../assets/img/user.png";
import { useTypeSelector } from "../../../../../hooks/useTypeSelector";

interface HeaderLinksUserInfoProps {
  setState: Dispatch<SetStateAction<boolean>>;
}

const HeaderLinksUserInfo: FC<HeaderLinksUserInfoProps> = ({ setState }) => {
  const { user, isAuth, loading, error } = useTypeSelector(
    (state) => state.userReducer
  );

  console.log(error);

  return (
    <div className={cls.headerLinksUserInfo}>
      {loading ? (
        <BeatLoader
          className={cls.buttonsLoader}
          color={"#ff2e65"}
          loading={loading}
          size={30}
          aria-label="Loader spinner"
          data-testid="loader"
        />
      ) : isAuth ? (
        <Link to="/account" className={cls.userBlock}>
          <img src={userImg} alt="userImg" />
          <p className={cls.userBlockName}>
            <span>{user.name}</span> <span>{user.surname}</span>
          </p>
        </Link>
      ) : (
        <p
          className={`${cls.buttonsLogin} pink-text`}
          onClick={() => setState(true)}
        >
          Войти
        </p>
      )}
    </div>
  );
};

export default HeaderLinksUserInfo;
