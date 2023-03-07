import { useState } from "react";

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

export default function ExploreFilters({
  filters=[],
  handleSortChange,
  handlePriceChange,
}) {
  const [sortBy, setSortBy] = useState("");
  const [prices, setPrices] = useState("");



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
            labelId="sort-label"
            value={sortBy}
            onChange={(e) => {
              handleSortChange(e);
              setSortBy(e.target.value);
            }}
          >
            {Array.isArray(filters.sort) &&
              filters.sort.map((el) => (
                <MenuItem value={el.value} key={el.value}>
                  {el.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="price-label"></InputLabel>
          <Select
            className={classNames(styles.select)}
            variant="outlined"
            labelId="price-label"
            value={prices}
            onChange={(e) => {
              handlePriceChange(e);
              setPrices(e.target.value);
            }}
          >
            {Array.isArray(filters.price) &&
              filters.price.map((el) => (
                <MenuItem value={el.value} key={el.value}>
                  {el.label}
                </MenuItem>
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
