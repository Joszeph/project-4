import styles from "./CollectorsColumn.module.scss";

import Collector from "./Collector";

export default function CollectorsColumn({
  items = [
    {
      name: "test",
      nftsCount: 20,
      avatar: "",
      verified: true,
      id: 1,
    },
    {
      name: "String",
      nftsCount: 220,
      avatar: "",
      verified: false,
      id: 2,
    },
    {
      name: "test",
      nftsCount: 204,
      avatar: "",
      verified: true,
      id: 3,
    },
  ],
}) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.id}>
          <Collector
            name={item.name}
            nftsCount={item.nftsCount}
            avatar={item.avatar}
            verified={item.verified}
            id={item.id}
            number={item.number}
            type={i === 0 ? "light" : "dark"}
          />
        </div>
      ))}
    </div>
  );
}
