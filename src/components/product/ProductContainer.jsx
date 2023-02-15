import * as React from "react";

import classNames from "classnames";
import styles from "./ProductContainer.module.scss";

import { Container, Grid, Box } from "@mui/material";

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
      <Container>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={6}>
              <ProductImage url={product?.source?.url} />
            </Grid>
            <Grid item xs={5}>
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
              <ProductTabs bids={product?.bids} text={product?.details} />
              <ProductActions
                isLive={product?.auction_end}
                currency={product?.currency}
                buyAmount={product?.bids}
                bidAmount={product?.bids}
                onBid={product?.bids}
                onBuy={product?.bids}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
