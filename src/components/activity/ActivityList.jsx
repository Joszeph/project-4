import React from "react";

import classNames from "classnames";
import styles from "./ActivityList.module.scss";

import { Stack } from "@mui/material";

import ActivityListItem from "./ActivityListItem";

export default function ActivityList({ items=[] }) {
  return (
    <div className={classNames(styles["activity-list"])}>
      <Stack
        className={classNames(styles["activity-item"])}
        direction="column"
        alignItems="center"
      >
        {items.map((item) => {
          <ActivityListItem
            user={item.user}
            created_at={item.created_at}
            nft={item.nft}
            type={item.type}
          />;
        })}
      </Stack>
    </div>
  );
}
