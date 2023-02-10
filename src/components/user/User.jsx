import Avatar from "../avatar/Avatar";
import classNames from "classnames";
import styles from './User.module.scss'

export default function User({
  name,
  info,
  avatar,
  size = 55,
  verified,
}) {
  return (
    <div className={classNames(styles.user)}>
      <Avatar size={size} verified={verified} avatar={avatar}/>
      <div className={classNames(styles.userInfo)}>
        <p className={classNames(styles.name)}>{name}</p>
        <p className={classNames(styles.info)}>{info}</p>
      </div>
    </div>
  );
}
