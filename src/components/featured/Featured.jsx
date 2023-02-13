import { useRouter } from "next/dist/client/router";


import styles from "./Featured.module.scss";
import classNames from "classnames";
import { Container, ImageList, ImageListItem } from "@mui/material";

export default function Featured({ items = [] }) {
  const route = useRouter();

  const handleClick = (index) => {
    route.push(items[index].href);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <ImageList cols={6} className={classNames(styles.imgWrapper)} gap={30}>
          {items.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                className={
                  index === 0
                    ? classNames(styles.bigImage)
                    : classNames(styles.smallImage)
                }
                src={item?.image}
                alt={item.title}
                onClick={() => handleClick(index)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
