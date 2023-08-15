import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Components
import Card from "../../UI/Card";
import Button from "../../UI/Button";

// Styles
import classes from "./CheckoutForm.module.css";

//Utils
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhone,
  validateAddress,
} from "../../../Utils/BillingFormValidations";

//Services
import { createOrder } from "../../../services/Orders";

//Errors assets
import errors from "../../../assets/billingFormError.json";

//Store
import { deleteCart } from "../../../store/actions/cartActions";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatchAction = useDispatch();
  const [error, setError] = useState({ state: false, description: null });

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const createNewOrder = async () => {
    const result = await createOrder(cart);
    dispatchAction(deleteCart());
    navigate(`/orders/${result}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstNameValue = firstNameRef.current.value;
    const lastNameValue = lastNameRef.current.value;
    const emailValue = emailRef.current.value;
    const phoneValue = phoneRef.current.value;
    const addressValue = addressRef.current.value;

    const result =
      validateFirstName(firstNameValue) &&
      validateLastName(lastNameValue) &&
      validateEmail(emailValue) &&
      validatePhone(phoneValue) &&
      validateAddress(addressValue);

    if (result && cart.items.length > 0) {
      setError({ state: false, description: null });
      createNewOrder();
    } else {
      if (!validateFirstName(firstNameValue)) {
        setError({ state: true, description: errors.firstName.description });
        return;
      }
      if (!validateLastName(lastNameValue)) {
        setError({ state: true, description: errors.lastName.description });
        return;
      }
      if (!validateEmail(emailValue)) {
        setError({ state: true, description: errors.email.description });
        return;
      }
      if (!validatePhone(phoneValue)) {
        setError({ state: true, description: errors.phone.description });
        return;
      }
      if (!validateAddress(addressValue)) {
        setError({ state: true, description: errors.address.description });
        return;
      }
      setError({
        state: true,
        description: "There are not products in your cart",
      });
    }
  };

  return (
    <Card className={classes.billingContainer}>
      <header className={classes.header}>
        <h2>Billing address</h2>
      </header>
      <div className={classes.content}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <p className={classes.inputContainer}>
            <label htmlFor="firstName">First Name</label>
            <input
              ref={firstNameRef}
              type="text"
              id="firstName"
              className={classes.input}
            />
          </p>
          <p className={classes.inputContainer}>
            <label htmlFor="lastName">Last Name</label>
            <input
              ref={lastNameRef}
              type="text"
              id="lastName"
              className={classes.input}
            />
          </p>
          <p className={classes.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className={classes.input}
            />
          </p>
          <p className={classes.inputContainer}>
            <label htmlFor="phone">Phone</label>
            <input
              ref={phoneRef}
              type="number"
              id="phone"
              className={classes.input}
            />
          </p>
          <p className={classes.inputContainer}>
            <label htmlFor="address">Address</label>
            <input
              ref={addressRef}
              type="text"
              id="address"
              className={classes.input}
            />
          </p>
          <Button type="submit" className={classes.submitButton}>
            Purchase
          </Button>
        </form>
        <p className={classes.error}>
          {error.state ? error.description : null}
        </p>
      </div>
    </Card>
  );
};

export default CheckoutForm;
