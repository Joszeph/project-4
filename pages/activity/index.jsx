import { useEffect, useState } from "react";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero.jsx";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";

export default function index() {
  const url = process.env.apiUrl;
  const [activities, setActivities] = useState([]);
  const [activityFilters, setActivityFilters] = useState({
    sort: [],
    type: [],
  });
  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: "",
    type: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/activities`);
      const data = await response.json();
      setActivities(data.items);
      setActivityFilters(data.filters);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredData = async () => {
      let filteredUrl = `${url}/activities?`;
      if (selectedFilters.sortBy !== "") {
        filteredUrl += `&sort=${selectedFilters.sortBy}`;
      }
      if (selectedFilters.type !== "") {
        filteredUrl += `&type=${selectedFilters.type}`;
      }
      const response = await fetch(filteredUrl);
      const data = await response.json();
      setActivities(data.items);
    };
    fetchFilteredData();
  }, [selectedFilters]);

  const handleSortByChange = (event) => {
    setSelectedFilters({
      ...selectedFilters,
      sortBy: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    setSelectedFilters({
      ...selectedFilters,
      type: event.target.value,
    });
  };

  return (
    <div>
      <Header />
      <Hero text="Activity" />
      <ActivityFilters
        filters={activityFilters}
        onSortByChange={handleSortByChange}
        onTypeChange={handleTypeChange}
      />
      <ActivityList items={activities} />
      <Footer />
    </div>
  );
}
