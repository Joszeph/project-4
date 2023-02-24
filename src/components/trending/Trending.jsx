import {Select, Grid, MenuItem, Box } from "@mui/material";
import Container from "@mui/material/Container";

import Card from "../card/Card";

import classNames from "classnames";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [] , filters}) {
  return (
   <div>
     <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h1 className={classNames(styles.header)}>Trending</h1>
        <Select
          sx={{
            width: "220px",
            height: "50px",
            borderRadius: "30px",
          }}
        >
          <MenuItem value={1}>{Array.isArray(filters.sort) && filters.sort.map((filter, i)=>(
            <MenuItem value={filter.value} key={i}>{filter.label}</MenuItem>
          ))}</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item xs={3} key={card.name}>
            <Card
              name={card.name}
              likes={2300}
              mediaUrl={card.mediaUrl}
              user={card.user}
              price={card.price}
              currency={card.currency}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
   </div>
  );
}
