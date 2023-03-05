import { FC } from "react";
import { Link } from "react-router-dom";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import cls from "./HeaderConfirmEmail.module.scss";

interface HeaderConfirmEmailProps {}

const HeaderConfirmEmail: FC<HeaderConfirmEmailProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  return (
    <>
      {user.activationLink ? (
        <div className={cls.headerConfirmEmail}>
          Подтвердите вашу почту!{" "}
          <Link
            to={`${import.meta.env.VITE_API_URL}/api/activate/${
              user.activationLink
            }`}
          >
            Ссылка
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HeaderConfirmEmail;
