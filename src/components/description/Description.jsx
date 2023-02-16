import { Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./Description.module.scss";

export default function Description({text, image}) {
  return (
    <div className={classNames(styles.description)}>
        <Typography className={classNames(styles.text)} variant="body1">
            {text}
        </Typography>
        <img className={classNames(styles.image)} src={image} alt="" />
    </div>
  )
}

