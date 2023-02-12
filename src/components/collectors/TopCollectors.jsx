import { Select, Grid, MenuItem, Box } from "@mui/material";
import Container from "@mui/material/Container";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";

import chunk from "lodash.chunk";

import CollectorColumn from "./CollectorColumn";

export default function TopCollectors({
  collectors = []
}) {

  const chunkCollectors = chunk(
    collectors.map((collector, index) => ({ ...collector, id: index + 1 })),3
  );

  console.log(chunkCollectors);

  return (
    <div>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h1 className={classNames(styles.header)}>Top Collectors</h1>
          <Select
            sx={{
              width: "220px",
              height: "50px",
              borderRadius: "30px",
            }}
          >
            <MenuItem value={1}>Sort by</MenuItem>
          </Select>
        </Box>
        <Grid container spacing={2}>
          {chunkCollectors.map((chunkCollector, index) => (
            <Grid item xs={3} id={index}>
              <CollectorColumn items={chunkCollector}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
