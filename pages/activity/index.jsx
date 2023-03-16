import { useEffect, useState } from "react";

import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero.jsx";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";


export default function index() {

  const url = process.env.apiUrl;

  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState([])
  const [filters, setFilters] = useState({ sort: '', type: '' });


 useEffect(async() => {
  const response = await fetch(`${url}/activities`)
  const result = await response.json()
  setActivity(result.activities)
  setActivityFilters(result.filters)
}, []);

const fetchActivities = async () => {
  const response = await fetch(`${url}/activities?sort=${sort}&type=${type}`);
  const result = await response.json();
  setActivity(result.activities);
  setActivityFilters(result.filters);
};

useEffect(() => {
  fetchActivities();
}, [filters]);

  return (
    <div>
      <Header />
      <Hero text="Activity"/>
      <ActivityFilters filters={activityFilters} setFilters={setFilters} onApply={fetchActivities}/>
      <ActivityList items={activity} />
      <Footer />
    </div>
  );
}