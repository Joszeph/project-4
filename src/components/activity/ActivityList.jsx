import React from "react";

import classNames from "classnames";
import styles from "./ActivityList.module.scss";

import ActivityListItem from "./ActivityListItem";

import Stack from "@mui/material/Stack";

export default function ActivityList({ items = [] }) {
  return (
    <div className={classNames(styles["activity-list"])}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        className={classNames(styles["activity-item"])}
      >
        {items.map((item) => {
          <ActivityListItem
            key={index}
            user={item.user}
            created_at={item.created_at}
            nft={item.nft}
            type={item.type}
          />
        })}
      </Stack>
    </div>
  );
}
