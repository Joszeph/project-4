import React from "react";

import classNames from "classnames";
import styles from "./ActivityListItem.module.scss";

import { Stack } from "@mui/material";

import formatDistance from "date-fns/formatDistance";
import parseISO from "date-fns/parseISO";

import Avatar from "../../components/avatar/Avatar";
import Link from "../../components/link/Link";

export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like",
}) {
  return (
    <div className={classNames(styles["activity-list-item"])}>
      <Stack
        className={classNames(styles["activity-item"])}
        direction="row"
        spacing={10}
        alignItems="center"
        justifyContent="flex-start"
        sx={{ marginLeft: 3 }}
      >
        <Avatar
          className={classNames(styles.avatar)}
          url={user.avatar.url}
          verified={user.verified}
          size={60}
          sx={{ p: "21" }}
        />
        <div>
          <p>
            {user.username} {type == "like" ? " liked '" : " bought '"}
            <Link href={"/product/" + nft.id} color="secondary">
              {nft.name}
            </Link>
            <Link href={"/profile/" + nft.owner.id} color="secondary">
              {nft.owner.username}
            </Link>
          </p>
          <p>
            {formatDistance(parseISO(created_at), new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
      </Stack>
    </div>
  );
}
