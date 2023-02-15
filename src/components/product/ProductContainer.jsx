import styles from './ProductContainer.module.scss';
import { Grid, Box, Container} from '@mui/material';
import classNames from "classnames";

import ProductImage from './ProductImage';
import ProductActions from './ProductActions';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';


export default function ProductContainer({product}) {

    return (
        <Container maxWidth={false} className={classNames(styles["product-container"])}>
            <Grid container spacing={6}>
                <Grid item xs={6}>
               <ProductImage url={product?.source?.url}/>
                </Grid>
                <Grid item xs={5}>
                <ProductInfo
            title={product?.name}
            creator={product?.owner}
            price={product?.price}
            currency={product?.currency}
            likes={product?.likes}
            timeEnd={product?.auction_end}
            isLive={product?.auction_end}
            onTimeEnd={product?.auction_end}
          /> 
          <ProductTabs bids={product?.bids} text={product?.details} />
          <ProductActions
            isLive={product?.auction_end}
            currency={product?.currency}
            buyAmount={product?.bids}
            bidAmount={product?.bids}
            onBid={product?.bids}
            onBuy={product?.bids}
          />
               </Grid>
            </Grid>
        </Container>
    )
}
