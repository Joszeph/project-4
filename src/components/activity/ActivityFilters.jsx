import React from "react";

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

export default function ActivityFilters({ filters =[] , handleSortChange, handleTypeChange }) {
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
          <Select value="Sort By" variant="outlined" className={classNames(styles.select)} onChange={handleSortChange}>
            {Array.isArray(filters.sort) && filters.sort.map((element) => (
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
          <Select value="Type" variant="outlined" className={classNames(styles.select)} onChange={handleTypeChange}>
            {Array.isArray(filters.type) && filters.type.map((element) => (
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
