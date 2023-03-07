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
  filters={sort:[], type:[]},
  handleSortChange,
  handleTypeChange,
}) {

  const [sortBy, setSort] = useState("");
  const [types, setTypes] = useState("");


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
              setSort(e.target.value);
            }}
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
          <InputLabel id="type"></InputLabel>
          <Select
            variant="outlined"
            value={types}
            className={classNames(styles.select)}
            onChange={(e) => {
              handleTypeChange(e);
              setTypes(e.target.value);
            }}
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