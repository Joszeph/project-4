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
  const { id } = router.query;
  const url = process.env.apiUrl;

  const [profile, setProfile] = useState();
  const [profileFilters, setProfileFilters] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${url}/users/${id}`);
        const result = await response.json();
        setProfile(result.user);
        setProfileFilters(result.filters);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      <ProfileHero />
      <ProfileUser
        verified={profile?.verified}
        name={profile?.username}
        info={profile?.info}
      />
      <ProfileCollection
        user={profile}
        filters={profileFilters}
        items={profile?.nfts}
      />
      <Footer />
    </div>
  );
}
