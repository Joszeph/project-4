import { Button, Container, Grid } from "@mui/material";

import classNames from "classnames";

import styles from "./How.module.scss";
import Step from "./Step";

export default function How({
  description = "Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.",
  title = "HOW IT WORKS",
  items = [
    {
      title: "Digital Currency",
      number: 1,
      description:
        "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
    },
    {
      title: "Crypto Wallet",
      number: 2,
      description:
        "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
    },
    {
      title: "BUM.",
      number: 3,
      description:
        "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. ",
    },
  ],
  link,
}) {
  return (
    <section className={classNames(styles.howContainer)}>
      <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Grid container className={classNames(styles.howLeft)}>
          <div className={classNames(styles.howLeftContent)}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button variant="contained" href={link}>
              LEARN MORE
            </Button>
          </div>
        </Grid>
        <Grid item className={classNames(styles.howRightContent)}>
          {items.map((item) => (
            <Step
              item={item.number}
              description={item.description}
              title={item.title}
            />
          ))}
        </Grid>
      </Grid>
    </section>
  );
}
