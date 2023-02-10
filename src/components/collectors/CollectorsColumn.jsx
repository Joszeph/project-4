import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";

import Collector from "./Collector";

export default function CollectorsColumn({ items = [] }) {
  return (
    <div className={classNames(styles.container)}>
      {items.map((item, i) => (
        <div key={item.id}>
          <Collector
            name={item.name}
            nftsCount={item.nftsCount}
            avatar={item.avatar}
            verified={item.verified}
            id={item.id}
            number={item.id}
            type={i === 0 ? "light" : "dark"}
          />
        </div>
      ))}
    </div>
  );
}
