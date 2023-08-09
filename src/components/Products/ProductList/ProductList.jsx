import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Components
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../../UI/Loader";

//Styles
import classes from "./ProductList.module.css";

//Services
import { returnItemsByCategory } from "../../../services/Products";

const ProductList = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const categoryId = params.categoryId;

  const [allProductsFiltered, setAllProductsFiltered] = useState([]);

  const returnProductsByCategory = async (categoryId) => {
    const allCategoryProducts = await returnItemsByCategory(categoryId);
    if (allCategoryProducts == null) {
      navigate("/error404");
    }
    setAllProductsFiltered((prev) => allCategoryProducts);
  };

  useEffect(() => {
    returnProductsByCategory(categoryId);
  }, [params]);

  const loader = (
    <div className={classes.loaderSpinner}>
      <Loader />
    </div>
  );

  return (
    <>
      {allProductsFiltered.length <= null ? (
        loader
      ) : (
        <div className={classes.productListContainer}>
          {allProductsFiltered.map((product, index) => (
            <ProductItem key={product.id} productInfo={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
