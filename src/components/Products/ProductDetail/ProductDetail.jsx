import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Utils
import { addToCartAction } from "../../../Utils/Cart";

//Components
import Button from "../../UI/Button";
import Loader from "../../UI/Loader";
import AddToCartModal from "../../UI/Modals/AddToCartModal";

//Styles
import classes from "./ProductDetail.module.css";

//Services
import { returnProductById } from "../../../services/Products";

const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.productId;

  const [activeAddToCartModal, setActiveAddToCartModal] = useState(null);
  const [productDetail, setProductDetail] = useState(null);

  const returnProductsByCategory = async (productId) => {
    const productDetail = await returnProductById(productId);
    if (productDetail == null) {
      navigate("/error404");
    }
    setProductDetail((prev) => productDetail);
  };

  useEffect(() => {
    returnProductsByCategory(productId);
  }, [params]);

  const loader = (
    <div className={classes.loaderSpinner}>
      <Loader />
    </div>
  );

  const priceChanged = (
    <div className={classes.price}>
      <p className={classes.oldPrice}>${productDetail?.price}</p>
      <p className={classes.newPrice}>
        ${productDetail?.price * (1 - productDetail?.discount)}
      </p>
    </div>
  );

  const addToCart = (event) => {
    addToCartAction(event);
    setActiveAddToCartModal(productDetail);
  };

  const closeAddToCartModal = () => {
    setActiveAddToCartModal(null);
  };

  const productLayout = (
    <>
      {activeAddToCartModal && (
        <AddToCartModal
          productInfo={productDetail}
          onConfirm={closeAddToCartModal}
        />
      )}

      <div className={classes.productDetailContainer}>
        <div className={classes.productDetail}>
          <img src={productDetail?.url} className={classes.productImage} />
          <div className={classes.productData}>
            <h1>{productDetail?.name}</h1>
            {productDetail?.discount == 0 ? (
              <p className={classes.price}>${productDetail?.price}</p>
            ) : (
              priceChanged
            )}

            <p className={classes.productDescription}>
              {productDetail?.description}
            </p>

            <p className={classes.productBrand}>
              Sold by {productDetail?.brand}
            </p>

            <Button className={classes.addToCart} onClick={addToCart}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  return <>{productDetail == null ? loader : productLayout}</>;
};

export default ProductDetail;
