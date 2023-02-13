import * as React from "react";
import classNames from "classnames";
import styles from "./ProductImage.module.scss";

export default function ProductImage({ url }) {
  return (
    <div className={classNames(styles["product-image"])}>
      <img className={classNames(styles.image)} src={url} alt=""></img>
    </div>
  );
}
