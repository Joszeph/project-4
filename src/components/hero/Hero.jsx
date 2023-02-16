import { Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./Hero.module.scss";

export default function Hero({text="title"}) {
  return (
    <div className={classNames(styles.hero)}>
        <Typography className={classNames(styles.text)} variant="h1">
            {text}
        </Typography>
    </div>
  )
}

