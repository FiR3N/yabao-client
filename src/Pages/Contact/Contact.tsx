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

        <ContactForm />
      </div>
    </MainLayout>
  );
};

export default Contact;
