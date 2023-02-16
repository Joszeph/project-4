import * as React from 'react';
import { useRouter, useEffect } from 'next/dist/client/router';

import Header from '../../../src/components/header/Header'
import ProductContainer from '../../../src/components/product/ProductContainer'
import Footer from '../../../src/components/footer/Footer'

import dataNfts from '../../../data/nfts.json'


export default function Product() {

    const router = useRouter()
    const[product, setProduct] = React.useState()

    const {id} =router.query
    const url = dataNfts

    React.useEffect(async()=>{
        const result = await fetch(`${url}/nfts/${id}`)
        const response = await result.json()
        setProduct(response)
        
    })

  return (
    <div>
        <Header />
        <ProductContainer product={product}/>
        <Footer />
    </div>
  )
}
