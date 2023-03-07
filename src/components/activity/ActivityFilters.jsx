import React from "react";
import { useState, useEffect } from "react";

import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
  Search,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function ActivityFilters(
  { filters = { sort: [], type: [] } }
  // handleSortChange,
  // handleTypeChange,
) {
  const url = process.env.apiUrl;
  const [sortBy, setSortBy] = useState("");
  const [type, setType] = useState("");

  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState({ sort: [], type: [] });

  useEffect(async () => {
    try {
      const response = await fetch(`${url}/activities`);
      const result = await response.json();
      setActivity(result.activities);
      setActivityFilters(result.filters);
    } catch (err) {
      console.log(err);
    }
  }, []);

  let urlad = `${process.env.apiUrl}/activities?sort=${sortBy}&type=${type}`

  // const buildApiUrl = () => {
  //   let url = `${process.env.apiUrl}/activities`;

  //   if (sortBy) {
  //     url += `?sort=${sortBy}`;
  //   }

  //   if (type) {
  //     url += `${sortBy ? '&' : '?'}type=${type}`;
  //   }

  //   return url;
  // };

  useEffect(async () => {
    try{
      const response = await fetch(urlad);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setActivity(result.activities);
      setActivityFilters(result.filters);
    }catch(error){
      console.log(error)
    }

  }, [sortBy, type]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className={classNames(styles["activity-filters"])}>
      <Stack direction="row" spacing={2} alignItems="center">
        <FormControl
          className={classNames(styles.form)}
          variant="filled"
          margin="dense"
          size="small"
          sx={{ minWidth: 150 }}
        >
          <InputLabel id="sort-by"></InputLabel>
          <Select
            variant="outlined"
            value={sortBy}
            className={classNames(styles.select)}
            onChange={(e) => {
              handleSortChange(e);
              setSortBy(e.target.value);
            }}
          >
            {Array.isArray(filters.sort) &&
              filters.sort.map((element) => (
                <MenuItem value={element.value} filter={element.label} key={element.value}/>
              ))}
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          margin="dense"
          size="small"
          sx={{ minWidth: 150 }}
        >
          <InputLabel id="type"></InputLabel>
          <Select
            variant="outlined"
            value={type}
            className={classNames(styles.select)}
            onChange={(e) => {
              handleTypeChange(e);
              setType(e.target.value);
            }}
          >
            {Array.isArray(filters.type) &&
              filters.type.map((element) => (
                <MenuItem value={element.value} filter={element.label} key={element.value}/>
              ))}
          </Select>
        </FormControl>
        <TextField
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classNames(styles.icon)} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </div>
  );
}
