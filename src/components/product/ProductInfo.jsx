import * as React from "react";

import classNames from "classnames";
import styles from "./ProductInfo.module.scss";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";


export default function ProductInfo({
  title = "",
  creator = { name: "", avatar: "", verified: false },
  price = 0,
  currency = "",
  likes = 0,
  onTimeEnd,
  timeEnd,
  isLive = false,
}) {
  return (
    <div className={classNames(styles["product-info"])}>
      <ProductInfoTitle text={title} className={classNames(styles["title"])} />
      <Stack
        className={classNames(styles["stats"])}
        borderTop={1}
        borderColor={"primary.main"}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={2}
      >
        <ProductInfoPrice amount={price} currency={currency} />
        <Stack direction="row" spacing={1}>  
          {isLive ? <ProductInfoStatus /> : ""}
          <ProductInfoLikes amount={likes} />
        </Stack>
      </Stack>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        className={classNames(styles["grid"])}
      >
        <Grid item xs="7">
          <ProductInfoCreator
            name={creator.name}
            avatar={creator.avatar}
            verified={creator.verified}
          />
        </Grid>
        <Grid item xs="5">
          <ProductInfoTimer onTimeEnd={onTimeEnd} timeEnd={timeEnd} />
        </Grid>
      </Grid>
    </div>
  );
}
