import React, { useState } from "react";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";

export default function ActivityFilters({
  filters = { sort: [], type: [] },
  onSortByChange,
  onTypeChange,
})
{
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
          value=""
          className={classNames(styles.select)}
          onChange={onSortByChange}
        >
            {Array.isArray(filters.sort) &&
              filters.sort.map((element) => (
                <MenuItem value={element.value} filter={element.label} key={element.value}>
                  {element.label}
                </MenuItem>
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
          value=""
          className={classNames(styles.select)}
          onChange={onTypeChange}
        >
            {Array.isArray(filters.type) &&
              filters.type.map((element) => (
                <MenuItem value={element.value} filter={element.label} key={element.value}>
                  {element.label}
                </MenuItem>
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