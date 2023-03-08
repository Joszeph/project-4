import { useEffect, useState } from "react";

import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero.jsx";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";

export default function Index() {
  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState({
    sort: [],
    type: [],
  });
  const [sort, setSort] = useState("");
  const [type, setType] = useState("");

  useEffect(async () => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(process.env.apiUrl + "/activities");
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
        onSortChange={handleSortChange}
        onTypeChange={handleTypeChange}
      />
      <ActivityList items={activity} sort={sort} type={type} />
      <Footer />
    </div>
  );
}
















// I'm an asshole and I copied everything from Joseph