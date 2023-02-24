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

 useEffect(async() => {
  const response = await fetch(`${url}/activities`)
  const result = await response.json()
  setActivity(result)
  setActivityFilters(result.filters)
}, []);

  return (
    <div>
      <Header />
      <Hero text="Activity"/>
      <ActivityFilters filters={activityFilters}/>
      <ActivityList items={activity} />
      <Footer />
    </div>
  );
}
