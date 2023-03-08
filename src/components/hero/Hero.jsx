import { Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./Hero.module.scss";

export default function Hero({text}) {
  return (
    <div className={classNames(styles.hero)}>
        <Typography className={classNames(styles.text)} variant="h1">
            {text}
        </Typography>
    </div>
  )
}

// I'm an asshole and I copied everything from Joseph