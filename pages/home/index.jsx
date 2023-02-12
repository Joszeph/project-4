import { useState, useEffect } from "react";

import TopCollectors from "../../src/components/collectors/TopCollectors";
import Featured from "../../src/components/Featured/Featured";
import Header from "../../src/components/header/Header";
import How from "../../src/components/how/How";
import Trending from "../../src/components/trending/Trending";
import Auctions from "../../src/components/auctions/Auctions";
import Footer from "../../src/components/footer/Footer";

import dataFeatured from "../../data/featured.json";
import dataTrending from "../../data/trending.json";
import dataUsers from "../../data/users.json";
import dataNfts from "../../data/nfts.json";

const Home = () => {

  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingCards, setTrendingCards] = useState([]);
  const [topCollectors, setTopCollectors] = useState([]);
  const [auctionNfts, setAuctionNfts] = useState([]);
  
  useEffect(() => {
    setFeaturedCards(dataFeatured.slice(0,6));
    setTrendingCards(dataTrending);
    setTopCollectors(dataUsers.slice(0,12));
    setAuctionNfts(dataNfts);
  }, []);

  return (
    <>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingCards}/>
      <TopCollectors collectors={topCollectors}/>
      <How />
      <Auctions cards={auctionNfts}/>
      <Footer />
    </>
  );
};

export default Home;
