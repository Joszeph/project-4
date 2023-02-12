import Example from "../src/components/example/Example";
import Home from "../pages/home";

import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

export default function Index() {
  return (
    <Home dataFeatured={dataFeatured} dataTrending={dataTrending} dataUsers={dataUsers} dataNfts={dataNfts}/>
  );
}
