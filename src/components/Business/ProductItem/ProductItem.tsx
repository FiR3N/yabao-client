import React, { FC, useEffect, useState } from "react";
import { BasketActions } from "../../../hooks/useActions";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { IProduct } from "../../../models/IProduct";
import MyButton from "../../UI/MyButton/MyButton";
import ProductModal from "../Modals/ProductModal/ProductModal";
import cls from "./ProductItem.module.scss";
import ProductItemCartButton from "./ProductItemCartButton/ProductItemCartButton";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

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
            <ProductItemCartButton productId={product.id} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
