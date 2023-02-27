import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

// import profile from '../../data/profile.json'

export default function Profile() {
  const [profile, setProfile] = useState();
  const [profileFilters, setProfileFilters] = useState();
  const router = useRouter();

  async function fetchProfile() {
    const fetchJson = async () => {
      const response = await fetch(
        process.env.apiUrl + "/users/" + router.query.id
      );
      const results = await response.json();
      return results;
    };
    const jsons = await fetchJson();
    setProfile(jsons.user);
    setProfileFilters(jsons.filters);
  }
  useEffect(() => {
    fetchProfile();
  }, [router]);

  return (
    <div>
      <Header />
      {profile && <ProfileHero image={profile.avatar.backgroundUrl} />}

      {profile && (
        <ProfileUser
          verified={profile.verified}
          avatar={profile.avatar.url}
          name={profile.username}
          info={profile.info}
        />
      )}
      {profile && profileFilters && (
        <ProfileCollection
          user={profile}
          filters={profileFilters}
          items={profile.nfts}
        />
      )}
      <Footer />
    </div>
  );
}
