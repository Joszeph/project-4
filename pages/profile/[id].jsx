import React, {useEffect, useState} from 'react';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileHero from '../../src/components/profile/ProfileHero';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileCollection from '../../src/components/profile/ProfileCollection';
import { useRouter } from "next/router";


export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const baseUrl = process.env.apiUrl

    const [profile, setProfile] = useState([])
    const [profileFilters, setProfileFilters] = useState([])

    useEffect(async () => {
          const result = await fetch(`${baseUrl}/users/${id}`)
          const response =  await result.json()
          
          setProfile(response.profile)
          setProfileFilters(response.filters)


      },[]);

    return (
        <div>
            <Header />
            <ProfileHero />
            <ProfileUser />
            <ProfileCollection  user={profile} filters={profileFilters}/>
            <Footer />
        </div>
    )
}