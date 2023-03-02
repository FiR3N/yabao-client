import React, { FC, useEffect, useState } from "react";
import { IProduct } from "../../../models/IProduct";
import { IType } from "../../../models/IType";
import { ProductService } from "../../../services/AllProductService";
import ProductItem from "../ProductItem/ProductItem";
import cls from "./ProductList.module.scss";

interface ProductListProps {
  type: IType;
}

const ProductList: FC<ProductListProps> = ({ type }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    ProductService.getProductsByTypeId(type.id).then((data) =>
      setProducts(data)
    );
  }, []);
  return (
    <div className={cls.productList}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.name + product.id} product={product} />
        ))
      ) : (
        <p>{`Продуктов не найдено! :(`}</p>
      )}
    </div>
  );
};

export default ProductList;
