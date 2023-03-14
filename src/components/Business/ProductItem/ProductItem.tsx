import React, { FC, useEffect, useMemo, useState } from "react";
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
  const [isProductInBasket, setIsProductInBasket] = useState(false);

  const { user } = useTypeSelector((state) => state.userReducer);
  const { basket } = useTypeSelector((state) => state.basketReducer);

  const { addToBasket, deleteBasketItemByProductId } = BasketActions();

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isProductInBasket) {
      deleteBasketItemByProductId(product.id, user.id);
      setIsProductInBasket(false);
    } else {
      e.preventDefault();
      addToBasket(user.id, product.id);
      setIsProductInBasket(true);
    }
  };

  useEffect(() => {
    if (basket.some((item) => item.productId === product.id)) {
      setIsProductInBasket((prev) => (prev = true));
    }
  }, [basket]);

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
            <div className={cls.productItemPrice}>
              <p className={cls.productItemPriceDiscount}>
                от{" "}
                {product.isDiscount ? product.discountedPrice : product.price} ₽
              </p>
              {product.isDiscount && (
                <p className={cls.productItemPriceWithoutDiscount}>
                  {product.price} ₽
                </p>
              )}
            </div>
            {isProductInBasket ? (
              <MyButton onClick={buttonHandler}>В корзине ✓</MyButton>
            ) : (
              <MyButton onClick={buttonHandler}>В корзину</MyButton>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
