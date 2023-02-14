import * as React from "react";

import classNames from "classnames";
import styles from "./ProductTabs.module.scss";

import User from "../user/User";

import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, TableCell, TableRow } from "@mui/material";

export default function ProductTabs({ text = "", bids = [] }) {
  return (
    <div className={classNames(styles["product-tabs"])}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tab
            label="Details"
            value="1"
            className={classNames(styles.detailsTab)}
          />
          <Tab label="Bids" value="2" className={classNames(styles.bidsTab)} />
        </Box>
        <TabPanel value="1">
          <p>{text}</p>
        </TabPanel>
        <TabPanel value="2">
          {bids.map((bid, index) => (
            <TableRow
              className={classNames(
                "table-row-" + index,
                styles[(index + 1) % 2 == 0 ? "dark" : "light"]
              )}
              sx={{ borderColor: "Background" }}
            >
              <TableCell align="left">
                <User
                  name={bid.user.name}
                  avatar={bid.user.avatar}
                  verified={bid.user.verified}
                ></User>
              </TableCell>
              <TableCell
                align="center"
                className={classNames(styles["amount"])}
              >
                {bid.amount + " ETH"}
              </TableCell>
              <TableCell align="center">
                {formatDistance(parseISO(bid.date), new Date(), {
                  addSuffix: true,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TabPanel>
      </TabContext>
    </div>
  );
}
