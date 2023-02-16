import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Header from "../../src/components/header/Header";
import ProductTabs from "../../src/components/product/ProductTabs";
import ProductActions from "../../src/components/product/ProductActions";
import ProductContainer from "../../src/components/product/ProductContainer";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";


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
      <Hero />
      <Description />
    </>
  );
}
