import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

//Components
import ProductItem from "../Products/ProductItem/ProductItem";
import Loader from "../UI/Loader";

//Styles
import classes from "./SearchResult.module.css";

//Services
import { returnAllItems } from "../../services/Products";

const SearchResult = (props) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const productName = params.get("name");

  const [allProductsFiltered, setAllProductsFiltered] = useState([]);

  const returnProducts = async (productName) => {
    const allProducts = await returnAllItems(productName);
    if (allProducts == null) {
      navigate("/error404");
    }

    const newArray = allProducts.filter((product) => {
      const name = product.name.toUpperCase();

      const upperProductName = productName.toUpperCase();

      return name.includes(upperProductName);
    });

    setAllProductsFiltered((prev) => newArray);
  };

  useEffect(() => {
    returnProducts(productName);
  }, [params]);

  const loader = (
    <div className={classes.loaderSpinner}>
      <Loader />
    </div>
  );

  return (
    <>
      {allProductsFiltered?.length == null ? (
        loader
      ) : (
        <div className={classes.productListContainer}>
          {allProductsFiltered.map((product) => (
            <ProductItem key={product.id} productInfo={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResult;
