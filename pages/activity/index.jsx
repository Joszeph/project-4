import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero.jsx";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";
import { useEffect, useState } from "react";

import activityDb from '../../data/activity.json'

export default function index() {
  const [activity, setActivity] = useState([]);

 useEffect(() => {
  fetch(activityDb)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(json => setActivity(json))
    .catch(error => console.error("Error fetching activity data:", error));
}, []);

  return (
    <div>
      <Header />
      <Hero text="Activity"/>
      <ActivityFilters />
      <ActivityList items={activity} />
      <Footer />
    </div>
  );
}
