import Avatar from "../avatar/Avatar";
import classNames from "classnames";
import styles from "./User.module.scss";

export default function User({
  name = "",
  info = "",
  avatar = "",
  size = 55,
  verified = false,
}) {
  return (
    <div className={classNames(styles.user)}>
      <Avatar />
      <div className={classNames(styles.userInfo)}>
        <p className={classNames(styles.name)}>{name}</p>
        <p className={classNames(styles.info)}>{info}</p>
      </div>
    </div>
  );
}
