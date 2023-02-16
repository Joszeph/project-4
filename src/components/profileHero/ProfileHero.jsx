import classNames from "classnames";
import styles from "./ProfileHero.module.scss";

export default function ProfileHero({image}) {
  return (
    <div className={classNames(styles["profile-hero"])}>
        <img className={classNames(styles.image)} src={image} alt="" />
    </div>
  )
}

