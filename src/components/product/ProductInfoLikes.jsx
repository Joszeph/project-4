import * as React from "react";
import classNames from "classnames";
import styles from "./ProductInfoLikes.module.scss";
import { Chip } from "@mui/material";

import millify from "millify";

export default function ProductInfoLikes({ amount = 0 }) {
    
  const likesMilified = millify(amount);

  return (
    <div className={classNames(styles["product-info-likes"])}>
      <Chip
        label={likesMilified}
        variant="outlined"
        color="secondary"
        size="small"
        icon={<FavoriteIcon />}
        className={classNames(styles.likes)}
      />
    </div>
  );
}
