import React, { FC, useCallback, useEffect, useState } from "react";
import MyButton from "../../../components/UI/MyButton/MyButton";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MyLabel from "../../../components/UI/MyLabel/MyLabel";
import MyTextArea from "../../../components/UI/MyTextArea/MyTextArea";
import MailService from "../../../services/MailService";
import cls from "./ContactForm.module.scss";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const [successSent, setSuccessSent] = useState(false);

  useEffect(() => {
    if (successSent) {
      setTimeout(() => {
        setSuccessSent(false);
      }, 5000);
    }
  }, [successSent]);

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    MailService.sendMessage(email, theme, text)
      .then(() => {
        setError(false);
        setEmail("");
        setTheme("");
        setText("");
        setSuccessSent(true);
      })
      .catch(() => setError(true));
  };

  return (
    <>
      {successSent && (
        <div className="success-info">Сообщение успешно отправлено!</div>
      )}
      <form className={cls.contactForm}>
        {error && <p className="error-text">Неверный email!</p>}
        <div>
          <MyLabel>Почта</MyLabel>
          <MyInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            value={email}
            type="text"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Почтовый адрес..."
          />
        </div>
        <div>
          <MyLabel>Тема</MyLabel>
          <MyInput
            onChange={(e) => setTheme(e.currentTarget.value)}
            value={theme}
            type="text"
            placeholder="Тема сообщения..."
            pattern="[a-z0-9._%+-]+"
            maxLength={100}
          />
        </div>
        <MyLabel>Текст</MyLabel>
        <MyTextArea
          onChange={(e) => setText(e.currentTarget.value)}
          value={text}
          placeholder="Текст сообщения..."
          maxLength={700}
        />
        <MyButton onClick={sendMessage}>Отправить</MyButton>
      </form>
    </>
  );
};

export default ContactForm;
