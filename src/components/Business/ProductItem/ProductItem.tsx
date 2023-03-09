import React, { FC, useState } from "react";
import { BasketActions } from "../../../hooks/useActions";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { IProduct } from "../../../models/IProduct";
import MyButton from "../../UI/MyButton/MyButton";
import ProductModal from "../Modals/ProductModal/ProductModal";
import cls from "./ProductItem.module.scss";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const { user } = useTypeSelector((state) => state.userReducer);
  const { addToBasket } = BasketActions();

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToBasket(user.id, product.id);
  };

  return (
    <>
      {/* {isProductModalOpen && (
        <ProductModal setActive={setIsProductModalOpen} product={product} />
      )} */}
      {product.isAvailable && (
        <div className={cls.productItem}>
          <img src={`${import.meta.env.VITE_API_URL}/${product.img}`} />
          <p className={cls.productItemName}>{product.name}</p>
          <p className={`${cls.productItemDesc} gray-text`}>{product.desc}</p>
          <div className={cls.productItemPriceWithButton}>
            <p>
              от {product.isDiscount ? product.discountedPrice : product.price}{" "}
              ₽
            </p>
            <MyButton onClick={buttonHandler}>В корзину</MyButton>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
