import React from "react";

import classNames from "classnames";
import styles from "./ProfileCollection.module.scss";
import { Container, Grid, Typography } from "@mui/material";

import ProfileColectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";

export default function ProfileCollection({ user, filter, items = [] }) {
  return (
    <div className={classNames(styles["profile-collection"])}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography variant="h3">Collection</Typography>
          </Grid>
          <Grid item xs={9}>
            <ProfileColectionFilters filters={filter} />
          </Grid>
          <Grid item container xs={12} gap={2}>
            {items.map((item) => (
              <Card
                name={item.name}
                likes={item.likes}
                mediaUrl={item.mediaUrl}
                user={item.user}
                price={item.price}
                currency={item.currency}
                timeLeft={item.timeLeft}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
