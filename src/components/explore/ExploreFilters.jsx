import { useState, useEffect } from "react";

import classNames from "classnames";
import styles from "./ExploreFilters.module.scss";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

export default function ExploreFilters({ filters, handleSortChange , handlePriceChange }) {


  return (
    <div className={classNames(styles["explore-filters"])}>
      <Stack direction="row" spacing={2} alignItems="center">
        <FormControl
          variant="filled"
          margin="dense"
          size="small"
          sx={{ minWidth: 150 }}
        >
          <InputLabel id="sort-label"></InputLabel>
          <Select
            className={classNames(styles.select)}
            variant="outlined"
      
            onChange={handleSortChange}
            labelId="sort-label"
          >
            {Array.isArray(filters.sort) &&
              filters.sort.map((el) => (
                <MenuItem value={el.value} key={el.id}> {el.label} </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="price-label"></InputLabel>
          <Select
            className={classNames(styles.select)}
            variant="outlined"
         
            onChange={handlePriceChange}
            labelId="price-label"
          >
            {Array.isArray(filters.price) &&
              filters.price.map((el) => (
                <MenuItem value={el.value} key={el.id}> {el.label} </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextField
          className={classNames(styles.search)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search className={classNames(styles.icon)} />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </div>
  );
}
