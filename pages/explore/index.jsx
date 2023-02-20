import React from "react";

import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";

import { Card, Container, Grid } from "@mui/material";

import nftsDb from "../../data/nfts.json";

export default function ExplorePage() {
  const [nfts, setNfts] = React.useState([]);
  const [nftFilters, setNftFilters] = React.useState();

  function fetchNfts() {
    const fetchJson = () => {
      const response = fetch(nftsDb);
      const results = response.json();
      return results;
    };
    const jsons = fetchJson();
    console.log(jsons);
    setNfts(jsons.nfts);
    setNftFilters(jsons.filters);
  }
  React.useEffect(() => {
    fetchNfts();
  }, []);

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={3}
          alignItems="flex-start"
        >
          <Grid item xs={5}>
            <ExploreTitle />
          </Grid>
        </Grid>
        <Grid>
          <Grid xs={7}>
            <ExploreFilters filters={nftFilters} />
          </Grid>
        </Grid>
        <Grid container spacing={3} maxWidth="lg" sx={{ marginLeft: 3 }}>
          {nfts.map((nft) => (
            <Grid>
              <Card
                item
                xs={3}
                name={nft.name}
                mediaUrl={nft.source.url}
                user={nft.owner}
                price={nft.price}
                currency={nft.currency}
                likes={nft.likes}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
