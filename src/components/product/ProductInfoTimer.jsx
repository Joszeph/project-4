import * as React from 'react';
import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss";

import * as myModule from "@mui/material";

import Countdown from 'react-countdown';

import  Typography  from '@mui/material/Typography';

export default function ProductInfoTimer({onTimeEnd,timeEnd}) {

  const countDownTimer = timeEnd ? (
    <Countdown
      date={timeEnd}
      onComplete={onTimeEnd}
      renderer={(props) => (
        <div className={classNames(styles.count)}>
          {props.formatted.hours +
            ":" +
            props.formatted.minutes +
            ":" +
            props.formatted.seconds}
        </div>
      )}
    />
  ) : (
    null
  );

  return (
    <div className={classNames(styles["product-info-timer"])}>
      {timeEnd ? (
        <myModule.Card
          className={classNames(styles["product-info-timer-card"])}
        >
          <Typography className={classNames(styles.title)} component="div">
            Ends in
          </Typography>

          <div className={classNames([styles.timer , styles.active])}>
            {countDownTimer}
          </div>
        </myModule.Card>
      ) : (
        ""
      )}
    </div>
  );
}
