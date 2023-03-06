import { Route, Router } from "react-router";
import { Routes } from "react-router-dom";
import App from "../App";
import { useTypeSelector } from "../hooks/useTypeSelector";
import AccountSettings from "../Pages/Account/AccountSettings/AccountSettings";
import Account from "../Pages/Account/Accout";
import Cart from "../Pages/Cart/Cart";
import Contact from "../Pages/Contact/Contact";
import Discounts from "../Pages/Discounts/Discounts";
import Main from "../Pages/Main/Main";

//main -> type -> contact-us -> discounts -> account(orders with settings) -> cart

const AppRouter = () => {
  const { isAuth } = useTypeSelector((state) => state.userReducer);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:name" element={<Main />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discounts" element={<Discounts />} />
      {isAuth && <Route path="/account" element={<Account />} />}
      {isAuth && (
        <Route path="/account/settings" element={<AccountSettings />} />
      )}
      {isAuth && <Route path="/cart" element={<Cart />} />}
    </Routes>
  );
};

export default AppRouter;
