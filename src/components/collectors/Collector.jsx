import styles from "./Collector.module.scss";
import classNames from "classnames";
import User from "../../components/user/User";

export default function Collector({
  name,
  avatar,
  verified,
  type,
  number,
  nftsCount,
  id,
}) {
  return (
    <div
      className={classNames(
        styles.container,
        type === "light" ? styles.light : null
      )}
    >
      <div className={classNames(styles.stepWrapper)}>
        <div className={classNames(styles.stepP)}>
          <p className={classNames(styles.stepNumber)}>{number}</p>
        </div>
        <div className={classNames(styles.stepContent)}>
          <User
            name={name}
            info={nftsCount}
            avatar={avatar}
            verified={verified}
            id={id}
          />
        </div>
      </div>
    </div>
  );
}
