import {
  Grid,
  Container,
  Typography,
  Stack,
  Select,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

export default function ActivityFilters({
  filters = {
    sort: [
      { label: "Name (Ascending)", value: 1 },
      { label: "Name (Descending)", value: 2 },
    ],
    type: [
      { label: "Liked", value: 3 },
      {
        label: "Bought",
        value: 4,
      },
    ],
  },
}) {
  console.log(filters);
  return (
    <div className={styles["activity-filters"]}>
      <Container>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h3">Activity</Typography>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1 }} size="small" fullWidth>
              <Select
                color="primary"
                labelId="sort-order"
                id="sort-order"
                variant="outlined"
                value={1}
                label={filters.sort.label}
              ></Select>
            </FormControl>
            <FormControl sx={{ m: 1 }} size="small" fullWidth>
              <Select
                labelId="price"
                id="price"
                value={3} 
                color="primary"
                label={filters ? "sdf" : "none"}
                className={classNames(styles.selectBox)}
              ></Select>
            </FormControl>
            <FormControl sx={{ padding: "4" }}>
              <TextField
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
                className={classNames(styles.backgroundInputSearch)}
                fullWidth
                color="secondary"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
