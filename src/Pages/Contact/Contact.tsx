import { FC, useEffect } from "react";
import MainLayout from "../../components/UI/MainLayout/MainLayout";
import cls from "./Contact.module.scss";
import ContactForm from "./ContactForm/ContactForm";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout title="Контакты">
      <div className={cls.contact}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff8f0743d051733309a2ec3167bc348658c9c3e160a94e099262737896d8be60&amp;source=constructor"
          width="1110"
          height="420"
        />
        <h3 className={cls.contactFormTitle}>Свяжитесь с нами</h3>
        {/* {successSent && (
          <div className="success-info">Сообщение успешно отправлено!</div>
        )} */}
        {/* <form className={cls.contactForm}>
          {error && <p className="error-text">Неверный email!</p>}
          <div>
            <MyLabel>Почта</MyLabel>
            <MyInput
              onChange={(e) => setEmail(e.currentTarget.value)}
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
        </form> */}
        <ContactForm />
      </div>
    </MainLayout>
  );
};

export default Contact;
