import { Grid, Container, Button } from "@mui/material";

import styles from "./Footer.module.scss";
import classNames from "classnames";

import Logo from "../logo/Logo";

export default function Copyright() {
  return (
    <footer className={classNames(styles.footerWrapper)}>
      <Container className={classNames(styles.container)} maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-around" spacing={10}>
          <Grid item >
            <Logo type="muted" />
          </Grid>
          <Grid item >
            <p>Bum All Rights Reserved 2021</p>
          </Grid>
          <Grid item >
            <Button className={classNames(styles.footerBtn)}>Privacy Policy</Button>
            <Button className={classNames(styles.footerBtn)}>Cookie Policy</Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
