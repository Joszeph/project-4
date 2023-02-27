import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

// import profile from '../../data/profile.json'

export default function Profile() {
  const router = useRouter();
  const id = router.query['id'];
  const url = process.env.apiUrl;

  const [profile, setProfile] = useState();
  const [profileFilters, setProfileFilters] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(`${url}/users/${id}`);
        const response = await fetch(`${url}/users/427`);
        const result = await response.json();
        setProfile(result.user);
        setProfileFilters(result.filters);
        console.log( result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <ProfileHero />
      {profile && (
        <ProfileUser
          verified={profile.verified}
          name={profile.username}
          info={profile.info}
        />
      )}
      {profile && profileFilters && (
        <ProfileCollection user={profile} filters={profileFilters} />
      )}
      <Footer />
    </div>
  );
}
