import { FC } from "react";
import { Link } from "react-router-dom";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import MailService from "../../../../services/MailService";
import cls from "./HeaderConfirmEmail.module.scss";

interface HeaderConfirmEmailProps {}

const HeaderConfirmEmail: FC<HeaderConfirmEmailProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);

  const sendActivatedMessage = async (e: React.MouseEvent<HTMLSpanElement>) => {
    await MailService.sendActivationMessage(
      user.email,
      user.activationLink as string
    );
  };

  return (
    <>
      {user.email && !user.isConfirmed ? (
        <div className={cls.headerConfirmEmail}>
          Подтвердите вашу почту!{" "}
          <span
            className={cls.headerConfirmEmailBut}
            onClick={sendActivatedMessage}
          >
            Отправить сообщение еще раз
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HeaderConfirmEmail;
