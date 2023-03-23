import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BasketActions } from "../../../../hooks/useActions";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import IOrder from "../../../../models/validators/IOrder";
import OrderService from "../../../../services/OrderService";
import FormItem from "../../../UI/FormItem/FormItem";
import InformationModal from "../../../UI/InformationModal/InformationModal";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";
import MyLabel from "../../../UI/MyLabel/MyLabel";
import MyModal from "../../../UI/MyModal/MyModal";
import cls from "./OrderModal.module.scss";

interface OrderModalProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}

const OrderModal: FC<OrderModalProps> = ({ setActive }) => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { promo } = useTypeSelector((state) => state.basketReducer);

  const { deleteAllBasketItems } = BasketActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrder>({ mode: "onChange" });
  const onSubmit: SubmitHandler<IOrder> = async (data, e) => {
    e?.preventDefault();
    await OrderService.sendOrder(user.id, data.address, promo.id);
    deleteAllBasketItems();
  };

  return (
    <>
      <div className={cls.orderModal}>
        <MyModal closeMethod={setActive}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={cls.orderModalTitle}>Подтверждение</h2>
            <div className={cls.orderModalItem}>
              <MyLabel>Почта:</MyLabel>
              <MyInput placeholder={user.email} disabled />
            </div>
            <div className={cls.orderModalItem}>
              <MyLabel>Телефон:</MyLabel>
              <MyInput placeholder={user.phone} disabled />
            </div>
            <div className={cls.orderModalItem}>
              <MyLabel>Имя:</MyLabel>
              <MyInput placeholder={user.name} disabled />
            </div>
            <div className={cls.orderModalItem}>
              <MyLabel>Фамилия:</MyLabel>
              <MyInput placeholder={user.surname} disabled />
            </div>

            <FormItem
              labelName="Адрес:"
              register={register("address", {
                required: "Почта не может быть пустой",
              })}
              errors={errors.address}
              placeholder="Введите куда отправить заказ..."
              type="text"
            />
            <MyButton>Заказать</MyButton>
          </form>
        </MyModal>
      </div>
    </>
  );
};

export default OrderModal;
