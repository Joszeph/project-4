import { useState, useEffect } from "react";

import TopCollectors from "../src/components/collectors/TopCollectors";
import Featured from "../src/components/featured/Featured";
import Header from "../src/components/header/Header";
import How from "../src/components/how/How";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import Example from "../src/components/example/Example";

import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

export default function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingCards, setTrendingCards] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [topCollectors, setTopCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([])
  const [auctions, setAuction] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([])
  const [filterValue, setFilterValue] = useState() 

  const url = process.env.apiUrl;

  const handleThisWeekChange = (event) => {
    setFilterValue(event.target.value)    
  }

  //Fetching Featured
  async function fetchFeatured() {
    const fetchFeaturedJson = async () => {
      const res = await fetch(url + "/featured");
      const result = res.json();
      return result;
    };
    const data = await fetchFeaturedJson();
    data.nfts[0].cols = 3;
    data.nfts[0].rows = 2;
    setFeaturedCards(data.nfts);
  }

  //Fetching Trending
  async function fetchTrending() {
    const fetchTrendingJson = async () => {
      const res = await fetch(url + "/trending");
      const result = res.json();
      return result;
    };
    const data = await fetchTrendingJson();
    setTrendingCards(data.nfts);
    setTrendingFilters(data.filters);
  }

  //Fetching TopCollectors
  async function fetchingTopCollectors(){
    const fetchingTopCollectorsJson = async ()=>{
      const res = await fetch(url + "/top-collectors")
      const result = res.json()
      return result
    }
    const data = await fetchingTopCollectorsJson()
    const nftsUsers = data.users.sort((a,b)=>(a.nftCount > b.nftCount) ? -1 : 1)
    setTopCollectors(nftsUsers)
    setCollectorFilters(data.filters)
  }

  //Fetching LiveAuctions
  async function fetchingLiveAuctions(){
    const fetchingLiveAuctionsJson = async ()=>{
      const res = await fetch(url + "/live-auctions")
      const result = res.json()
      return result
    }
    const NftsData = await fetchingLiveAuctionsJson()
    setAuction(NftsData)
    setAuctionFilters(NftsData.filters)
  }

  useEffect(() => {
    fetchFeatured();
    fetchTrending();
    fetchingTopCollectors()
    fetchingLiveAuctions()
    // setFeaturedCards(dataFeatured.slice(0,6));
    // setTrendingCards(dataTrending);
    // setTopCollectors(dataUsers.slice(0,12));
    // setAuctionNfts(dataNfts);
  }, [dataFeatured, dataTrending, dataUsers, dataNfts]);


  useEffect(async () => {
    const result = await fetch(`https://project-4-api.boom.dev/trending?sort=${filterValue}`)
    const response =  await result.json()
    setTrendingCards(response.nfts)
  }, [filterValue])

  return (
    <div>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingCards} filters={trendingFilters} handleThisWeekChange={handleThisWeekChange}/>
      <TopCollectors collectors={topCollectors} filters={collectorFilters}/>
      <How />
      <Auctions cards={auctions} filters={auctionFilters}/>
      <Footer />
    </div>
  );
}
