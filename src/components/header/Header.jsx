import Container from "@mui/material/Container";
import { Grid, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames";
import Logo from "../../components/logo/Logo";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div>
      <Container className={classNames(styles.container)} >
        <Grid container alignItems="center" justifyContent="space-evenly">
          <Grid item>
            <Logo type="default" />
          </Grid>
          <Grid item>
            <TextField
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              className={classNames(styles.searchField)}
              placeholder="Find items, users and activities"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className={classNames(styles.searchIcon)} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <Button variant="text" className={classNames(styles.navMenuBtns)}>
              Home
            </Button>
            <Button variant="text" className={classNames(styles.navMenuBtns)}>
              Activity
            </Button>
            <Button
              color="primary"
              variant="contained"
              className={classNames(styles.navMenuBtns)}
            >
              EXPLORE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
