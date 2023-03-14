import { FC } from "react";
import cls from "./OrderModal.module.scss";

interface OrderModalProps {}

const OrderModal: FC<OrderModalProps> = () => {
  return <div className={cls.orderModal}>Hello from OrderModal</div>;
};

export default OrderModal;
