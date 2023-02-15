import * as React from "react";

import classNames from "classnames";
import styles from "./ProductContainer.module.scss";

import { Container, Grid, Box, Item } from "@mui/material";

import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductTabs from "./ProductTabs.jsx";
import ProductActions from "./ProductActions.jsx";

export default function ProductContainer({
  name = "",
  owner = { username: "", verified, avatar: { url: "" } },
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
            <Grid item xs={6}>
              <Item>
                <ProductImage url={product?.source?.url} />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <ProductInfo
                  title={product?.name}
                  creator={{
                    name: owner.username,
                    verified: owner.verified,
                    avatar: owner.avatar.url,
                  }}
                  price={product?.price}
                  currency={product?.currency}
                  likes={product?.likes}
                  timeEnd={product?.auction_end}
                  isLive={product?.auction_end}
                  onTimeEnd={product?.auction_end}
                />
              </Item>
              <Item>
                <ProductTabs bids={product?.bids} text={product?.details} />
              </Item>
              <Item>
                <ProductActions
                  isLive={product?.auction_end}
                  currency={product?.currency}
                  buyAmount={product?.bids}
                  bidAmount={product?.bids}
                  onBid={product?.bids}
                  onBuy={product?.bids}
                />
              </Item>
            </Grid>
          </Grid>

    </div>
  );
}
