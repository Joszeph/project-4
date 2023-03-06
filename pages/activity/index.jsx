// import { useEffect, useState } from "react";

// import Header from "../../src/components/header/Header";
// import Hero from "../../src/components/hero/Hero.jsx";
// import ActivityFilters from "../../src/components/activity/ActivityFilters";
// import ActivityList from "../../src/components/activity/ActivityList";
// import Footer from "../../src/components/footer/Footer";

// // import activityDb from '../../data/activity.json'

// export default function index() {
//   const url = process.env.apiUrl;

//   const [activity, setActivity] = useState([]);
//   const [activityFilters, setActivityFilters] = useState([]);
//   const [sortBy, setSortBy] = useState("");
//   const [price, setType] = useState("");

//   useEffect(async () => {
//     try {
//       const response = await fetch(`${url}/activities`);
//       const result = await response.json();
//       setActivity(result.activities);
//       setActivityFilters(result.filters);
//     } catch (err) {
//       console.log(err);
//     }
//   }, []);

//   const buildApiUrl = () => {
//     let url = `${process.env.apiUrl}/activities`;

//     if (sortBy) {
//       url += `?sort=${sortBy}`;
//     }

//     if (price) {
//       url += `${sortBy ? '&' : '?'}price=${price}`;
//     }

//     return url;
//   };

//   useEffect(async () => {
//     try{
//       const response = await fetch(buildApiUrl());
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const result = await response.json();
//       setActivity(result.activities);
//       setActivityFilters(result.filters);
//     }catch(error){
//       console.log(error)
//     }

//   }, [sortBy, price]);


//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setType(e.target.value);
//   };

//   return (
//     <div>
//       <Header />
//       <Hero text="Activity" />
//       <ActivityFilters
//         filters={activityFilters}
//         handleSortChange={handleSortChange}
//         handleTypeChange={handleTypeChange}
//       />
//       <ActivityList items={activity} />
//       <Footer />
//     </div>
//   );
// }
import * as React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import ActivityList from "../../src/components/activity/ActivityList";
import ActivityFilters from "../../src/components/activity/ActivityFilters";

export default function index(){
    const [activity, setActivity] = React.useState();
    const [activityFilters, setActivityFilters] = React.useState();
    async function fetchActivities(){
      const fetchJson = async ()=>{
        const response = await fetch(process.env.apiUrl+"/activities");
        const results = await response.json();  
        return results;
        };
      const jsons = await  fetchJson();
      
      setActivity(jsons.activities);
      setActivityFilters(jsons.filters);
    }
    React.useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <div style={{width:"100%"}}>   
            <Header></Header>
            <Hero text={"Activity"}></Hero>
             <ActivityFilters filters={activityFilters}></ActivityFilters>
            <ActivityList items={activity}></ActivityList>
            <Footer></Footer>
        </div>
        );
}