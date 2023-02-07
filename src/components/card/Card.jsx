import classNames from "classnames";
import {
  Card as MuiCard,
  Chip,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import millify from "millify";
import FavoriteIcon from "@mui/icons-material/Favorite";

import styles from "./Card.module.scss";

import Avatar from "../../components/avatar/Avatar";

export default function Card({
  name = "",
  likes = 0,
  mediaUrl = "",
  user = { avatar: { url: "" }, verified: false },
  price = "",
  currency = "",
}) {
  const likesMilified = millify(likes);

  return (
    <MuiCard className={classNames(styles.card)}>
      <Avatar src={user.url} size="33" />
      <img src={mediaUrl} alt="" />
      <CardContent className={classNames(styles.titles)}>
        <div>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classNames(styles.title)}
          >
            Hopper
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classNames(styles.price)}
          >
         10 ETH
          </Typography>
        </div>

        <Chip
          label={likesMilified}
          variant="outlined"
          color="secondary"
          size="small"
          icon={<FavoriteIcon />}
          className={classNames(styles.likes)}
        />
      </CardContent>
    </MuiCard>
  );
}
