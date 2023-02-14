import * as React from "react";
import { useState } from "react";

import classNames from "classnames";
import styles from "./ProductTabs.module.scss";

import User from "../user/User";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, TableCell, TableRow } from "@mui/material";

import { parseISO, formatDistance } from "date-fns";

export default function ProductTabs({ text = "", bids = [] }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classNames(styles["product-tabs"])}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab
              label="Details"
              value="1"
              className={classNames(styles["tab-details"])}
            />
            <Tab
              label="Bids"
              value="2"
              className={classNames(styles["tab-bids"])}
            />
          </TabList>
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
                />
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
