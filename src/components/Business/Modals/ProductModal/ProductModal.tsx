import { FC, SetStateAction, useEffect, useState } from "react";
import { IProduct } from "../../../../models/IProduct";
import { ITypeAddition } from "../../../../models/ITypeAddtion";
import { TypeAdditionService } from "../../../../services/AllProductService";
import MyButton from "../../../UI/MyButton/MyButton";
import MyModal from "../../../UI/MyModal/MyModal";
import cls from "./ProductModal.module.scss";

interface ProductModalProps {
  setActive: React.Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}

const ProductModal: FC<ProductModalProps> = ({ setActive, product }) => {
  const [typeAdditions, setTypeAddtions] = useState<ITypeAddition[]>([]);
  const [typeAdditionLvlCount, setTypeAddtionLvlCount] = useState(0);
  useEffect(() => {
    TypeAdditionService.getTypeAdditions(product.typeId).then((data) =>
      setTypeAddtions(data)
    );
  }, []);
  useEffect(() => {
    for (let i = 1; i < typeAdditions.length; i++) {
      if (typeAdditions[i].addition_lvl != typeAdditions[i - 1].addition_lvl) {
        setTypeAddtionLvlCount((prev) => prev + 1);
      }
    }
  }, [typeAdditions]);

  console.log(typeAdditionLvlCount);

  return (
    <MyModal closeMethod={setActive}>
      <div className={cls.productModal}>
        <img src={`${import.meta.env.VITE_API_URL}/${product.img}`} />
        <div className={cls.productModalContent}>
          <p className={cls.productModalName}>{product.name}</p>
          <p className={`${cls.productModalDesc} gray-text`}>{product.desc}</p>
          <></>

          {/* <div className={cls.productModalAdditions}>
            {typeAdditions.map((type) => (
              <div className={cls.productModalAddition}>
                <MyButton>
                  {type.name} {type.price} ₽
                </MyButton>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </MyModal>
  );
};

export default ProductModal;
