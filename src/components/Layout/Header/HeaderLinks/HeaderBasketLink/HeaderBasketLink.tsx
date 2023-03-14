import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { BasketActions } from "../../../../../hooks/useActions";
import { useTypeSelector } from "../../../../../hooks/useTypeSelector";
import MyButton from "../../../../UI/MyButton/MyButton";

interface HeaderBasketLinkProps {}

const HeaderBasketLink: FC<HeaderBasketLinkProps> = () => {
  const { basketItemsCount, loading } = useTypeSelector(
    (state) => state.basketReducer
  );
  const { user } = useTypeSelector((state) => state.userReducer);

  const { getBasketItem } = BasketActions();

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      getBasketItem(user?.id);
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <BeatLoader
          color={"#ff2e65"}
          loading={loading}
          size={30}
          aria-label="Loader spinner"
          data-testid="loader"
        />
      ) : (
        <Link to="/cart">
          <MyButton>Корзина | {basketItemsCount}</MyButton>
        </Link>
      )}
    </>
  );
};

export default HeaderBasketLink;
