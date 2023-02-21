import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Card from "../../src/components/card/Card";

import nfts from '../../data/nfts.json'

export default function Explore() {


  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={3}
          alignItems="flex-start"
        >
          <Grid item xs="3">
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item xs="7">
            <ExploreFilters  />
          </Grid>
        </Grid>
        <Grid container spacing={3} maxWidth="lg" sx={{ marginLeft: 3 }}>
          {nfts.map((nft) => (
            <Grid item xs="3">
              <Card
                name={nft.name}
                mediaUrl={nft.source.url}
                user={nft.owner}
                price={nft.price}
                currency={nft.currency}
                likes={nft.likes}
              ></Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
