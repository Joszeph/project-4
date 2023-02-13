import * as React from "react";
import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";
import Circle from "@mui/icons-material/Circle";

export default function ProductInfoStatus() {
  return (
    <div className={classNames(styles["product-info-status"])}>
      <Chip
        color="secondary"
        className={classNames(styles.status)}
        variant="filled"
        icon={<Circle></Circle>}
        label={"LIVE"}
      ></Chip>
    </div>
  );
}
