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
  user = { avatar: { url: "" }, verified: true },
  price = "",
  currency = "",
}) {
  const likesMilified = millify(likes);

  return (
    <MuiCard className={classNames(styles.card)}>
      <div className={classNames(styles.avatarHolder)}>
      <Avatar src={user.avatar.url} size="33" verified={user.verified} badgeSize="15.55"/>
      </div>
     <div className={classNames(styles.imageHolder)}>
     <img src={mediaUrl} className={classNames(styles.media)} alt="" />
     </div>
      <CardContent className={classNames(styles.titles)}>
        <div>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classNames(styles.title)}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classNames(styles.price)}
          >
            ~{price} {currency}
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
