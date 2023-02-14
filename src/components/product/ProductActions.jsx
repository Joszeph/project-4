import * as React from "react";

import classNames from "classnames";
import styles from "./ProductActions.module.scss";

import { Button, Grid } from "@mui/material";

export default function ProductActions({
  isLive = false,
  currency,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
}) {
  return (
    <div className={classNames(styles["product-action"])} >
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Button
            fullWidth={true}
            disabled={isLive ? false : true}
            onClick={onBuy}
            variant="contained"
            className={classNames(styles["button"])}
          >
           {`BUY FOR ${buyAmount} ${currency}`}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            fullWidth={true}
            disabled={isLive ? false : true}
            onClick={onBid}
            variant="outlined"
            color="success"
            className={classNames(styles["button"])}
          >
            {`PLACE BID FOR ${bidAmount} ${currency}`}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
