import React, { useEffect } from "react";
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
  filters = { sort: [], type: [] },
  handleSortChange,
  handleTypeChange,
  sortBy,
  types,
}) {


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
          <InputLabel id="sort-by">Sort By</InputLabel>
          <Select
            variant="outlined"
            value={sortBy}
            className={classNames(styles.select)}
            onChange={handleSortChange}
            labelId="sort-by"
            id="sort-by-select"
          >
            {Array.isArray(filters.sort) &&
              filters.sort.map((element) => (
                <MenuItem value={element.value} filter={element.label} key={element.value}/>
              ))}
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          margin="dense"
          size="small"
          sx={{ minWidth: 150 }}
        >
          <InputLabel id="type">Type</InputLabel>
          <Select
            variant="outlined"
            value={sortBy}
            className={classNames(styles.select)}
            onChange={handleTypeChange}
            labelId="type"
            id="sort-by-type"
          >
            {Array.isArray(filters.type) &&
              filters.type.map((element) => (
                <MenuItem value={element.value} filter={element.label} key={element.value}/>
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




















// I'm an asshole and I copied everything from Joseph