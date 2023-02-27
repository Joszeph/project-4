import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

// import profile from '../../data/profile.json'

export default function Profile({ profile }) {
  const router = useRouter();
  const { id } = router.query;
  const url = process.env.apiUrl;

  const [profile, setProfile] = useState([]);
  const [profileFilters, setProfileFilters] = useState([]);

  useEffect(async () => {
    const result = await fetch(`${url}/users/${id}`);
    const response = await result.json();
    setProfile(response.profile);
    setProfileFilters(response.filters);
  });

  return (
    <div>
      <Header />
      <ProfileHero />
      <ProfileUser />
      <ProfileCollection user={profile} filters={profileFilters} />
      <Footer />
    </div>
  );
}
