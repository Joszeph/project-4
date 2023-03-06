import { useEffect, useState } from "react";

import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero.jsx";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";

// import activityDb from '../../data/activity.json'

export default function index() {

  const url = process.env.apiUrl;

  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState([])
  const [sortBy, setSortBy] = useState();
  const [type, setType] = useState();

 useEffect(async() => {
  try{
    const response = await fetch(`${url}/activities`)
    const result = await response.json()
    setActivity(result.activities)
    setActivityFilters(result.filters)
  }catch(err){
    console.log(err)
  }
}, []);


const buildApiUrl = () => {
  let url = `${process.env.apiUrl}/activity`;

  if (sortBy) {
    url += `?sort=${sortBy}`;
  }

  if (type) {
    url += `${sortBy ? '&' : '?'}type=${type}`;
  }

  return url;
};

useEffect(async () => {
  try{
    const response = await fetch(buildApiUrl());
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
    <div>
      <Header />
      <Hero text="Activity"/>
      <ActivityFilters filters={activityFilters}
       handleSortChange={handleSortChange} handleTypeChange={handleTypeChange}
      />
      <ActivityList items={activity} />
      <Footer />
    </div>
  );
}
