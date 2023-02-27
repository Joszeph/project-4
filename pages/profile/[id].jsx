import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

// import profile from '../../data/profile.json'

export default function Profile() {
  // const router = useRouter();
  // const { id } = router.query;
  // const url = process.env.apiUrl;

  // const [profile, setProfile] = useState([]);
  // const [profileFilters, setProfileFilters] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`${url}/users/${id}`);
  //       const result = await response.json();
  //       setProfile(result.user);
  //       setProfileFilters(result.filters);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, [id]);

  const router = useRouter();
  const { id } = router.query;

  const [profile, setProfile] = useState(null);
  const [profileFilters, setProfileFilters] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`https://project-4-api.boom.dev/users/${id}`);
        const { user, filters } = await response.json();
        setProfile(user);
        setProfileFilters(filters);
      } catch (error) {
        console.error(error);
      }
    }

    if (id) {
      fetchProfile();
    }
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
        filters={profile?.profileFilters}
        items={profile?.nfts}
      />
      <Footer />
    </div>
  );
}
