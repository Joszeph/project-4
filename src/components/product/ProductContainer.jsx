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
product
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
          <ProductImage url={product?.source?.url}/>
        </Grid>
        <Grid item xs="5">
          <ProductInfo
            onTimeEnd={() => {}}
            title={product?.name}
            // creator={{
            //   name: owner.username,
            //   verified: owner.verified,
            //   avatar: owner.avatar.url,
            // }}
            creator={product?.owner}
            price={product?.price}
            currency={product?.currency}
            likes={product?.likes}
            timeEnd={parseISO(product?.auction_end)}
            isLive={parseISO(product?.auction_end) > Date.now()}
          />
          <ProductTabs text={product?.details} bids={product?.bids}/>
          <ProductActions
            onBid={() => {}}
            onBuy={() => {}}
            isLive={true}
            currency={product?.currency}
            buyAmount={product?.price}
            bidAmount={5}
          />
        </Grid>
      </Grid>
    </div>
  );
}
