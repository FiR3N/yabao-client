import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IType } from "../../../models/IType";
import { TypeService } from "../../../services/AllProductService";
import ProductList from "../ProductList/ProductList";
import cls from "./TypeList.module.scss";

interface TypeListProps {}

const TypeList: FC<TypeListProps> = () => {
  const params = useParams();
  const [types, setTypes] = useState<IType[]>([]);

  const scrollToBlock = (name = "") => {
    setTimeout(() => {
      const typesNames = types.map((type) => type.name);
      if (typesNames.includes(name)) {
        const block = document.querySelector(`#${name}`);
        if (block != null) {
          block.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }, 500);
  };

  useEffect(() => {
    TypeService.getTypes().then((data) => setTypes(data));
  }, []);

  useEffect(() => {
    if (params) {
      scrollToBlock(params.name);
    }
  }, [params, types]);

  return (
    <div className={cls.typesOfProducts}>
      {types.length &&
        types.map((type) => {
          return (
            <div key={type.name} id={type.name} className={cls.typeOfproducts}>
              <h2 className={cls.title}>{type.name}</h2>
              <ProductList type={type} />
            </div>
          );
        })}
    </div>
  );
};

export default TypeList;
