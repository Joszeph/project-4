// import React from "react";
// import { useState } from "react";

// import classNames from "classnames";
// import styles from "./ActivityFilters.module.scss";
// import {
//   FormControl,
//   Select,
//   InputLabel,
//   MenuItem,
//   Stack,
//   TextField,
//   InputAdornment,
//   Search,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// export default function ActivityFilters({
//   filters = [],
//   handleSortChange,
//   handleTypeChange,
// }) {

//   const [sortBy, setSortBy] = useState("");
//   const [price, setType] = useState("");

//   return (
//     <div className={classNames(styles["activity-filters"])}>
//       <Stack direction="row" spacing={2} alignItems="center">
//         <FormControl
//           className={classNames(styles.form)}
//           variant="filled"
//           margin="dense"
//           size="small"
//           sx={{ minWidth: 150 }}
//         >
//           <InputLabel id="sort-by"></InputLabel>
//           <Select
//             variant="outlined"
//             value={sortBy}
//             className={classNames(styles.select)}
//             onChange={(e) => {
//               handleSortChange(e);
//               setSortBy(e.target.value);
//             }}
//           >
//             {Array.isArray(filters.sort) &&
//               filters.sort.map((element) => (
//                 <MenuItem value={element.value} filter={element.label} key={element.value}/>
//               ))}
//           </Select>
//         </FormControl>
//         <FormControl
//           variant="filled"
//           margin="dense"
//           size="small"
//           sx={{ minWidth: 150 }}
//         >
//           <InputLabel id="type"></InputLabel>
//           <Select
//             variant="outlined"
//             value={price}
//             className={classNames(styles.select)}
//             onChange={(e) => {
//               handleTypeChange(e);
//               setType(e.target.value);
//             }}
//           >
//             {Array.isArray(filters.type) &&
//               filters.type.map((element) => (
//                 <MenuItem value={element.value} filter={element.label} key={element.value}/>
//               ))}
//           </Select>
//         </FormControl>
//         <TextField
//           variant="standard"
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon className={classNames(styles.icon)} />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Stack>
//     </div>
//   );
// }
import * as React from "react";
import { useEffect } from "react";
import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Search from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CollectorColumn from "../collectors/CollectorColumn";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import { PriceChange } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";

export default function ActivityFilters({ filters = { sort: [], types: [] } }) {
  const [sortBy, setSort] = React.useState();
  const [types, setType] = React.useState();
  //console.log(filters.sort);
  // console.log(filters.price);

  React.useEffect(() => {
    const buildApiUrl = () => {
      let url = `${process.env.apiUrl}/activities`;
  
      if (sortBy) {
        url += `?sort=${sortBy}`;
      }
  
      if (types) {
        url += `${sortBy ? "&" : "?"}types=${types}`;
      }
  
      return url;
    };

    const fetchActivities = async () => {
      try {
        const response = await fetch(buildApiUrl());
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setActivity(result.activities);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchActivities();
  }, [sortBy, types]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div className={classNames(styles["activity-filters"])}>
      <Stack direction="row" spacing={2} alignItems="center">
        <FormControl
          variant="filled"
          margin="dense"
          size="small"
          sx={{ minWidth: 150 }}
        >
          <InputLabel id="sort-select-standard-label">Sort by</InputLabel>
          <Select
            className={classNames(styles.select)}
            variant="outlined"
            value={sortBy}
            onChange={(event) => setSort(event.target.value)}
            labelId="sort-select-standard-label"
          >
            {filters.sort.map((element) => (
              <MenuItem value={element.value}> {element.label} </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="type-select-standard-label">Type</InputLabel>
          <Select
            className={classNames(styles.select)}
            variant="outlined"
            value={types}
            onChange={(event) => setType(event.target.value)}
            labelId="type-select-standard-label"
          >
            {filters.type.map((element) => (
              <MenuItem value={element.value}> {element.label} </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={classNames(styles.search)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search className={classNames(styles.icon)} />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </div>
  );
}
