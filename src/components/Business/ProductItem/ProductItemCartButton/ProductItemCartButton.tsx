import { FC, useEffect, useState } from "react";
import { BasketActions } from "../../../../hooks/useActions";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import MyButton from "../../../UI/MyButton/MyButton";
import AuthModal from "../../Modals/AuthModal/AuthModal";

interface ProductItemCartButtonProps {
  productId: number;
}

const ProductItemCartButton: FC<ProductItemCartButtonProps> = ({
  productId,
}) => {
  const [isProductInBasket, setIsProductInBasket] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const { user, isAuth } = useTypeSelector((state) => state.userReducer);
  const { basket } = useTypeSelector((state) => state.basketReducer);
  const { addToBasket, deleteBasketItemByProductId } = BasketActions();

  useEffect(() => {
    if (basket.some((item) => item.productId === productId)) {
      setIsProductInBasket((prev) => (prev = true));
    }
  }, [basket]);

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAuth) {
      if (isProductInBasket) {
        deleteBasketItemByProductId(productId, user.id);
        setIsProductInBasket(false);
      } else {
        addToBasket(user.id, productId);
        setIsProductInBasket(true);
      }
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      {isLoginModalOpen && <AuthModal setActive={setIsLoginModalOpen} />}
      {isProductInBasket ? (
        <MyButton onClick={buttonHandler}>В корзине ✓</MyButton>
      ) : (
        <MyButton onClick={buttonHandler}>В корзину</MyButton>
      )}
    </>
  );
};

export default ProductItemCartButton;
