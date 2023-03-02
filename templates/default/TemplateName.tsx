import { FC } from "react";
import cls from "./TemplateName.module.scss";

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => {
  return <div className={cls.templateName}>Hello from TemplateName</div>;
};

export default TemplateName;
