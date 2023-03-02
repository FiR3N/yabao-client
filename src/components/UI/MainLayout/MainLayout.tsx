import React, { FC } from "react";
import cls from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => (
  <div className={`container ${cls.mainLayout}`}>
    {title && <h2 className={cls.mainLayoutTitle}>{title}</h2>}
    {children}
  </div>
);

export default MainLayout;
