import React from "react";
import { useState } from "react";

import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
  Search,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function ActivityFilters({
  filters = [],
  // handleSortChange,
  // handleTypeChange,
}) {
  const [sortBy, setSortBy] = useState("");
  const [type, setType] = useState("");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div className={classNames(styles["activity-filters"])}>
      <Stack direction="row" spacing={2} alignItems="center">
        <FormControl
          className={classNames(styles.form)}
          variant="filled"
          margin="dense"
          size="small"
          sx={{ minWidth: 150 }}
        >
          <InputLabel id="sort-by"></InputLabel>
          <Select
            variant="outlined"
            value={sortBy}
            className={classNames(styles.select)}
            onChange={(e) => {
              handleSortChange(e);
              setSortBy(e.target.value);
            }}
          >
            {Array.isArray(filters.sort) &&
              filters.sort.map((element) => (
                <MenuItem value={element.value} filter={element.label} />
              ))}
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          margin="dense"
          size="small"
          sx={{ minWidth: 150 }}
        >
          <InputLabel id="type"></InputLabel>
          <Select
            variant="outlined"
            value={type}
            className={classNames(styles.select)}
            onChange={(e) => {
              handleTypeChange(e);
              setType(e.target.value);
            }}
          >
            {Array.isArray(filters.type) &&
              filters.type.map((element) => (
                <MenuItem value={element.value} filter={element.label} />
              ))}
          </Select>
        </FormControl>
        <TextField
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classNames(styles.icon)} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </div>
  );
}
