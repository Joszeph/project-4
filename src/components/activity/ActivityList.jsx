import React from "react";

import classNames from "classnames";
import styles from "./ActivityList.module.scss";

import ActivityListItem from "./ActivityListItem";
import { Stack } from "@mui/material";

export default function ActivityList({ items = [], filters = {}  }) {

  const filteredItems = items
  .filter(
    (item) =>
      !filters.type || item.type === filters.type 
  )
  .sort((a, b) => {
    if (filters.sort === "price") {
      return a.nft.price - b.nft.price; 
    } else {
      return new Date(b.created_at) - new Date(a.created_at); 
    }
  });

  return (
    <div className={classNames(styles["activity-list"])}>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
      >
        {Array.isArray(items) && items.map((item, index) => {
          return (
            <ActivityListItem
              key={item.id}
              user={item.user}
              created_at={item.created_at}
              nft={item.nft}
              type={item.type}
            />
          );
        })}
      </Stack>
    </div>
  );
}
