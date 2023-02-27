import{useEffect, useState} from 'react'
import { useRouter} from "next/dist/client/router";

import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";

// import dataNfts from '../../../data/nfts.json'

export default function Product() {

  const url = process.env.apiUrl;

  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState();


  // const url = dataNfts

    useEffect(async () => {
      const response = await fetch(`${url}/nfts/${id}`)
      const result = await response.json()
      setProduct(result)

  });

  return (
    <div>
      <Header />
      <ProductContainer product={product} />
      <Footer />
    </div>
  );
}
