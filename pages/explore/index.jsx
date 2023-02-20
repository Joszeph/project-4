import React from "react";

import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";

import  Container  from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import nftsDb from "../../data/nfts.json";

export default function Explore() {
  const [nfts, setNfts] = useState([]);
  const [nftFilters, setNftFilters] = useState([]);
  const [sort, setSort] = useState();
  const [price, setPrice] = useState();

  const baseUrl = process.env.apiUrl;

  useEffect(async () => {
    try {
      const result = await fetch(nftsDb);
      const response = await result.json();

      setNfts(response.nfts);
      setNftFilters(response.filters);
    } catch (error) {
      throw error;
    }
  });

  useEffect(async () => {
    const result = await fetch(nftsDb);
    const response = await result.json();
    setNfts(response.nfts);
  }, [sort]);

  useEffect(async () => {
    const result = await fetch(nftsDb);
    const response = await result.json();
    setNfts(response.nfts);
  }, [price]);

  const handlePriceRangeChange = (event) => {
    setPrice(event.target.value);
  };
  const handleSortByChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <Header />
      <Container maxWidth="xl" sx={{ margin: "10px 0" }}>
        <Grid container>
          <Grid item xs={5}>
            <ExploreTitle />
          </Grid>
          <Grid item xs={7}>
            <ExploreFilters
              filters={nftFilters}
              handlePriceRangeChange={handlePriceRangeChange}
              handleSortByChange={handleSortByChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          {nfts.map((n, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Card
                  name={n.name}
                  likes={n.likes}
                  mediaUrl={n.mediaUrl}
                  user={n.owner}
                  price={n.price}
                  currency={n.currency}
                  timeLeft={n.timeLeft}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
