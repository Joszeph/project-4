import * as React from "react";
import classNames from "classnames";
import styles from "./ProductInfoLikes.module.scss";

import millify from "millify";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Chip } from "@mui/material";

export default function ProductInfoLikes({ amount = 0 }) {
  return (
    <div className={classNames(styles["product-info-likes"])}>
      <Chip
        color="secondary"
        className={classNames(styles.likes)}
        variant="outlined"
        icon={<FavoriteIcon></FavoriteIcon>}
        label={millify(amount)}
      ></Chip>
    </div>
  );
}
