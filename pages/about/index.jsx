import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Header from "../../src/components/header/Header";
import Footer from '../../src/components/footer/Footer'


export default function About() {
  return (
    <>

      <Header />
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="contained" component={Link} noLinkStyle href="/">
              🏠 Home
            </Button>
           
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
