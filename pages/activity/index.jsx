import { useEffect, useState } from "react";

import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero.jsx";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";

// import activityDb from '../../data/activity.json'

export default function index() {
  // const url = process.env.apiUrl;


//   ________________$$$$
// ______________$$____$$
// ______________$$____$$
// ______________$$____$$
// ______________$$____$$
// ______________$$____$$
// __________$$$$$$____$$$$$$
// ________$$____$$____$$____$$$$
// ________$$____$$____$$____$$__$$
// $$$$$$__$$____$$____$$____$$____$$
// $$____$$$$________________$$____$$
// $$______$$______________________$$
// __$$____$$______________________$$
// ___$$$__$$______________________$$
// ____$$__________________________$$
// _____$$$________________________$$
// ______$$______________________$$$
// _______$$$____________________$$
// ________$$____________________$$
// _________$$$________________$$$
// __________$$________________$$
// __________$$$$$$$$$$$$$$$$$$$$
// COPY THIS!!!

  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState({ sort: [], type: [] });
  const [sort, setSort] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(process.env.apiUrl + '/activities');
        const result = await response.json();
        setActivity(result.activities);
        setActivityFilters(result.filters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchActivities();
  }, []);

  const buildApiUrl = () => {
    let url = process.env.apiUrl + "/activities";
  
    const params = [];
  
    if (sort) {
      params.push(`sort=${sort}`);
    }
  
    if (type) {
      params.push(`type=${type}`);
    }
  
    if (params.length > 0) {
      url += "?" + params.join("&");
    }
  
    return url;
  };
  
  
  useEffect(() => {
    const fetchFilteredActivities = async () => {
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

    fetchFilteredActivities();
  }, [sort, type]);

  

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <Header />
      <Hero text="Activity" />
      <ActivityFilters
      filters={activityFilters}
      handleSortChange={handleSortChange}
      handleTypeChange={handleTypeChange}
      />
      <ActivityList items={activity} />
      <Footer />
    </div>
  );
}