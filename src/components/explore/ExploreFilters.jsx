import * as React from "react";

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

export default function ExploreFilters({ filters = { sort: [], price: [] } }) {
  const [sortBy, setSort] = React.useState();
  const [prices, setPrice] = React.useState();

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
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
            value={sortBy}
            onChange={handleSortChange}
            labelId="sort-label"
          >
            {filters.sort.map((el) => (
              <MenuItem value={el.value}> {el.label} </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="price-label"></InputLabel>
          <Select
            className={classNames(styles.select)}
            variant="outlined"
            value={prices}
            onChange={handlePriceChange}
            labelId="price-label"
          >
            {filters.price.map((el) => (
              <MenuItem value={el.value}> {el.label} </MenuItem>
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
