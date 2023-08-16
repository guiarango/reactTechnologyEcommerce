import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Components
import Card from "../UI/Card";
import Button from "../UI/Button";

// Styles
import classes from "./Orders.module.css";

//Services
import { returnSingleOrder } from "../../services/Orders";

const OrderResume = ({ onConfirm }) => {
  const [orderInfo, setOrderInfo] = useState({
    itemsCount: 0,
    itemsTotal: 0,
    items: [],
  });
  const navigate = useNavigate();
  const params = useParams();
  const orderId = params.orderId;

  const returnOrder = async () => {
    const order = await returnSingleOrder(orderId);
    if (order == null) {
      navigate("/error404");
    }
    setOrderInfo(order);
  };

  const goToHome = () => {
    navigate("/");
    onConfirm();
  };

  useEffect(() => {
    returnOrder();
  }, []);

  const orderItems =
    orderInfo.items.length <= 0 ? null : (
      <>
        {orderInfo.items.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <img
                  src={item.url}
                  alt={item.name}
                  className={classes["content-image"]}
                />
              </td>
              <td>
                <p>{item.name}</p>
                <p>${item.price * (1 - item.discount)}</p>
              </td>
              <td>
                <p>Quantity</p>
                <p>{item.quantity}</p>
              </td>
            </tr>
          );
        })}
      </>
    );

  return (
    <Card className={classes.purchaseContainer}>
      <header className={classes.header}>
        <h2>Order Id: {orderId}</h2>
      </header>
      <div className={classes.content}>
        <table className={classes.table}>
          {orderInfo.items.length <= 0 ? (
            <h2>There are not products in this order</h2>
          ) : (
            orderItems
          )}
        </table>
      </div>

      {orderInfo.items.length <= 0 ? null : (
        <div className={classes.itemsTotal}>Total ${orderInfo.itemsTotal}</div>
      )}
      <div className={classes.actions}>
        <Button className={classes.button} onClick={goToHome}>
          Go to Home
        </Button>
      </div>
    </Card>
  );
};

export default OrderResume;
