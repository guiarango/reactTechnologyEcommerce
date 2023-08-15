import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Components
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../../UI/Loader";
import OrderBy from "../ProductFilters/OrderBy";

//Styles
import classes from "./ProductsByCategory.module.css";

//Services
import { returnItemsByCategory } from "../../../services/Products";

const ProductsByCategory = (props) => {
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

  const handleSort = (nameOption) => {
    const arraySorted = [...allProductsFiltered];

    arraySorted.sort(function (a, b) {
      if (a[nameOption] > b[nameOption]) {
        return 1;
      }
      if (a[nameOption] < b[nameOption]) {
        return -1;
      }
      return 0;
    });

    setAllProductsFiltered((prev) => arraySorted);
  };

  return (
    <>
      {allProductsFiltered?.length <= 0 ? (
        loader
      ) : (
        <div className={classes.productListContainer}>
          <OrderBy sortItems={handleSort} />
          {allProductsFiltered.map((product) => (
            <ProductItem key={product.id} productInfo={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsByCategory;
