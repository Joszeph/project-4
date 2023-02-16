import * as React from "react";

import classNames from "classnames";
import styles from "./ProductContainer.module.scss";

import Grid from "@mui/material/Grid";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductActions from "./ProductActions";
import ProductTabs from "./ProductTabs";

import { parseISO } from "date-fns";

export default function ProductContainer({
  name = "",
  owner = { username: "", verified:false, avatar: { url: "" } },
  price = 0,
  currency = "",
  likes = 0,
  auction_end = (Date.now() + 1000).toString,
  details = "",
  source = { url: "" },
  bids = [],
}) {
  return (
    <div className={classNames(styles["product-container"])}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs="6">
          <ProductImage url={source.url}/>
        </Grid>
        <Grid item xs="5">
          <ProductInfo
            onTimeEnd={() => {}}
            title={name}
            creator={{
              name: owner.username,
              verified: owner.verified,
              avatar: owner.avatar.url,
            }}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={parseISO(auction_end)}
            isLive={parseISO(auction_end) > Date.now()}
          />
          <ProductTabs text={details} bids={bids}/>
          <ProductActions
            onBid={() => {}}
            onBuy={() => {}}
            isLive={true}
            currency={currency}
            buyAmount={price}
            bidAmount={5}
          />
        </Grid>
      </Grid>
    </div>
  );
}
