import React from "react";
import styles from "./ProductInfoPrice.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";


export default function ProductInfoPrice({ amount = 0, currency }) {
  return (
  <div className={classNames(styles["product-info-price"])}>
    <Typography variant="h6">{`on sale for ${amount} ${currency}`}</Typography>
  </div>
  )
}
