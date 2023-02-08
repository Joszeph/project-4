import Container from "@mui/material/Container";
import { Select, Grid, MenuItem, Box } from "@mui/material";

import Card from "../card/Card";

import classNames from "classnames";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [] }) {
  return (
    <Container maxWidth>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h1 className={classNames(styles.header)}>Trending</h1>
        <Select
          sx={{
            width: "220px",
            height: "50px",
            borderRadius: "30px",
          }}
        >
          <MenuItem value={1}>This week</MenuItem>
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
  );
}
