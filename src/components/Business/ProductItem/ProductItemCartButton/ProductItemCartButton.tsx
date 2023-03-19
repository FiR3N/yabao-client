import { FC, useEffect, useState } from "react";
import { BasketActions } from "../../../../hooks/useActions";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import MyButton from "../../../UI/MyButton/MyButton";

interface ProductItemCartButtonProps {
  productId: number;
}

const ProductItemCartButton: FC<ProductItemCartButtonProps> = ({
  productId,
}) => {
  const [isProductInBasket, setIsProductInBasket] = useState(false);

  const { user } = useTypeSelector((state) => state.userReducer);
  const { basket } = useTypeSelector((state) => state.basketReducer);
  const { addToBasket, deleteBasketItemByProductId } = BasketActions();

  useEffect(() => {
    if (basket.some((item) => item.productId === productId)) {
      setIsProductInBasket((prev) => (prev = true));
    }
  }, [basket]);

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isProductInBasket) {
      deleteBasketItemByProductId(productId, user.id);
      setIsProductInBasket(false);
    } else {
      addToBasket(user.id, productId);
      setIsProductInBasket(true);
    }
  };
  return (
    <>
      {isProductInBasket ? (
        <MyButton onClick={buttonHandler}>В корзине ✓</MyButton>
      ) : (
        <MyButton onClick={buttonHandler}>В корзину</MyButton>
      )}
    </>
  );
};

export default ProductItemCartButton;
