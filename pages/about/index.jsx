import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Header from "../../src/components/header/Header";
import Step from "../../src/components/how/Step";
import How from "../../src/components/how/How";
import Featured  from "../../src/components/Featured/Featured";
import Collector from "../../src/components/collectors/Collector";
import CollectorColumn from '../../src/components/collectors/CollectorColumn'
import TopCollectors from "../../src/components/collectors/TopCollectors";
import ProductInfoCreator from "../../src/components/product/ProductInfoCreator";




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
      <TopCollectors />



    </>
  );
}
