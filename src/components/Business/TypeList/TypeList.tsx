import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IType } from "../../../models/IType";
import { TypeService } from "../../../services/AllProductService";
import ProductList from "../ProductList/ProductList";
import cls from "./TypeList.module.scss";
import { BeatLoader } from "react-spinners";

interface TypeListProps {}

const TypeList: FC<TypeListProps> = () => {
  const params = useParams();
  const [types, setTypes] = useState<IType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
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
  const fetchTypes = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await TypeService.getTypes();
      setTypes(data);
    } catch (err) {
      console.error("Failed to fetch types:", err);
      setError("Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTypes();
  }, []);

  useEffect(() => {
    if (params) {
      scrollToBlock(params.name);
    }
  }, [params, types]);

  return (
    <div className={cls.typesOfProducts}>
      {isLoading ? (
        <div className={cls.typesOfProductsLoader}>
          <BeatLoader
            className={cls.buttonsLoader}
            color={"#ff2e65"}
            loading={isLoading}
            size={30}
            aria-label="Loader spinner"
            data-testid="loader"
          />
        </div>
      ) : error ? (
        <h2 className="error-text">{error}</h2>
      ) : types.length === 0 ? (
        <h2 className="error-text">Нет доступных категорий</h2>
      ) : (
        types.map((type) => (
          <div
            key={type.id || type.name}
            id={type.name}
            className={cls.typeOfproducts}
          >
            <h2 className={cls.title}>{type.name}</h2>
            <ProductList type={type} />
          </div>
        ))
      )}
    </div>
  );
};

export default TypeList;
