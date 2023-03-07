import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Card from "../../src/components/card/Card";

// import nfts from '../../data/nfts.json'

export default function Explore() {
  const url = process.env.apiUrl;

  const [nfts, setNfts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [prices, setPrices] = useState();

  useEffect(async () => {
    const response = await fetch(`${url}/explore`);
    const result = await response.json();
    setNfts(result.nfts);
    setFilters(result.filters);
  }, []);
  
  // useEffect(async () => {
  //   if (sortBy) {
  //     const response = await fetch(`${url}/explore?sort=${sortBy}`);
  //     const result = await response.json();
  //     setNfts(result.nfts);
  //   }
  // }, [sortBy]);
  
  // useEffect(async () => {
  //   if (prices) {
  //     const response = await fetch(`${url}/explore?price=${prices}`);
  //     const result = await response.json();
  //     setNfts(result.nfts);
  //   }
  // }, [prices]);

  const buildApiUrl = () => {
    let url = `${process.env.apiUrl}/explore`;
  
    if (sortBy) {
      url += `?sort=${sortBy}`;
    }
  
    if (prices) {
      url += `${sortBy ? '&' : '?'}price=${prices}`;
    }
  
    return url;
  };
  
  useEffect(async () => {
    const response = await fetch(buildApiUrl());
    const result = await response.json();
    setNfts(result.nfts);
  }, [sortBy, prices]);
  
  

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrices(e.target.value);
  };

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
          <Grid item xs={3}>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item xs={7}>
            <ExploreFilters
              filters={filters}
              handleSortChange={handleSortChange}
              handlePriceChange={handlePriceChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} maxWidth="lg" sx={{ marginLeft: 3 }}>
          {Array.isArray(nfts) &&
            nfts.map((nft) => (
              <Grid item xs={3} key={nft.id}>
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
