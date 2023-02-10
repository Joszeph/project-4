import { Select, Grid, MenuItem, Box, Button } from "@mui/material";
import Container from "@mui/material/Container";

import Card from "../card/Card";

import classNames from "classnames";
import styles from "./Auctions.module.scss";

export default function Auctions({ cards = [] }) {
  return (
    <div>
      <Container >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h1 className={classNames(styles.header)}>🔥 Live Auctions</h1>
          <Select
            sx={{
              width: "220px",
              height: "50px",
              borderRadius: "30px",
            }}
          >
            <MenuItem value={1}>Price range</MenuItem>
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
