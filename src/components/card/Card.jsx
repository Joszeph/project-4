import Countdown,{ zeroPad } from 'react-countdown';
import classNames from "classnames";
import {
  Card as MuiCard,
  Chip,
  CardContent,
  Typography
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import millify from "millify";
import FavoriteIcon from "@mui/icons-material/Favorite";

import styles from "./Card.module.scss";


import Avatar from "../../components/avatar/Avatar";


export default function Card({
  name = "",
  likes = 0,
  mediaUrl = "/images/nft.jpg",
  user = { avatar: { url: "" }, verified: false },
  price = "",
  currency = "",
  timeLeft 
}) {
  const likesMilified = millify(likes);

  const badge = (
    <div className={classNames(styles.badge)}>
      <CircleIcon fontSize='11px'/>
      <p className={classNames(styles.badgeText)}>LIVE</p>
    </div>
  )

  const countdown = ({ hours, minutes, seconds }) => (
    <div className={classNames(styles.countdown)}>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </div>
  );

  return (
  
    <MuiCard className={classNames(styles.card, timeLeft  ?
      styles.cardLive : styles.card
      )}>
      <div className={classNames(styles.avatarHolder)}>
      <Avatar src={user.avatar.url} size="33" verified={user.verified} badgeSize="15.55"/>
      </div>
     <div className={classNames(styles.imageHolder)}>
      {timeLeft && badge}
     <img src={mediaUrl} className={classNames(styles.media)} alt="" />
     {timeLeft && <Countdown date={Date.now() + timeLeft} renderer={countdown}/>}
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
