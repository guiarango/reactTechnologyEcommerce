import React from "react";

//Styles
import classes from "./OrderBy.module.css";

//Order by assets
import orderByAssets from "../../../assets/orderBy.json";

const OrderBy = ({ sortItems }) => {
  return (
    <div className={classes.filterContainer}>
      <form>
        <p>
          <label htmlFor="orderBy">Order By </label>
          <select
            id="orderBy"
            className={classes.select}
            onChange={(event) => {
              sortItems(event.target.value);
            }}
          >
            {orderByAssets.map((option) => (
              <option key={option.id} value={option.name.toLowerCase()}>
                {option.name}
              </option>
            ))}
          </select>
        </p>
      </form>
    </div>
  );
};

export default OrderBy;
