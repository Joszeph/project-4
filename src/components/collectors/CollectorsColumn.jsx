import styles from "./CollectorsColumn.module.scss";

import Collector from "./Collector";

export default function CollectorsColumn({ items = [] }) {
  return (
    <div>
      {items.map((item, i) => (
        <Collector
          key={item.id}
          name={item.name}
          nftsCount={item.nftsCount}
          avatar={item.avatar}
          verified={item.verified}
          id={item.id}
          number={item.number}
          type={i === 0 ? "light" : "dark"}
        />
      ))}
    </div>
  );
}
