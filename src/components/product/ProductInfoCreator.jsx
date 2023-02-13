import * as React from "react";
import classNames from "classnames";
import styles from "./ProductInfoCreator.module.scss";

import User from "../user/User";

export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={classNames(styles["product-info-creator"])}>
      <div className={classNames(styles["user-container"])}>
        <p className={classNames(styles["title"])}>CREATOR</p>
        <User name={name} avatar={avatar} verified={verified} />
      </div>
    </div>
  );
}
