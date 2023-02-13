import * as React from "react";
import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  const countDown = timeEnd ? (
    <Countdown date={Date.now() + timeEnd} onComplete={onTimeEnd} />
  ) : null;

  return (
    <div className={classNames(styles["product-info-timer"])}>
      {timeEnd && (
        <Grid container>
          <Grid item xs={12} className={classNames(styles["title-container"])}>
            <Typography variant="h4" className={classNames(styles["title"])}>
              ends in
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            className={classNames({
              [styles["timer"]]: true,
              [styles["active"]]: timeEnd ? true : false,
            })}
          >
            {countDown}
          </Grid>
        </Grid>
      )}
    </div>
  );
}
