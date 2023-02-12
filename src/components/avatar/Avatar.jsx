import styles from "./Avatar.module.scss";
import classNames from "classnames";

export default function Avatar({
  size = 90,
  url,
  verified = false,
  badgeSize 
}) {
  return (
    <div
      className={classNames(styles.avatar)}
      style={{ width: size + "px", height: size + "px" }}
    >
      <img className={classNames(styles.image)} src={url} alt="" />
      {verified && (
        <img
          className={classNames(styles.badge)}
          src="/images/verified.svg"
          style={{ width:  badgeSize + "px" }}
          alt=""
        />
      )}
    </div>
  );
}
