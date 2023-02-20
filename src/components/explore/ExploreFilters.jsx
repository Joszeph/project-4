import classNames from "classnames";
import styles from "./ExploreFilters.module.scss";

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
import { el } from "date-fns/locale";

export default function ExploreFilters({ filters = [] }) {
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
            labelId="sort-label"
          >
            {filters.sort.map((el) => (
              <MenuItem value={el.value}>{el.label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          variant="filled"
          margin="dense"
          size="small"
          sx={{ minWidth: 150 }}
        >
          <InputLabel id="type-label"></InputLabel>
          <Select
            className={classNames(styles.select)}
            variant="outlined"
            value={types}
            labelId="type-label"
          >
            {filters.type.map((el) => (
              <MenuItem value={el.value}>{el.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={classNames(styles.search)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classNames(styles.icon)} />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </div>
  );
}
