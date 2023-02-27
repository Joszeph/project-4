import { useRouter } from 'next/router';
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import * as React from 'react';
import ProfileHero from '../../../src/components/profile/ProfileHero';
import ProfileUser from '../../../src/components/profile/ProfileUser';
import ProfileCollectionFilters from '../../../src/components/profile/ProfileCollectionFilters';
import ProfileCollection from '../../../src/components/profile/ProfileCollection';


export default  function ProfilePage(){
    const [profile, setProfile] = React.useState();
    const [profileFilters, setProfileFilters] = React.useState();
    const router =useRouter();

    async function fetchProfile(){
      const fetchJson = async ()=>{
        const response = await fetch(process.env.apiUrl+"/users/"+router.query.id);
        const results = await response.json();  
        return results;
        };
      const jsons = await  fetchJson();
      console.log(jsons);
      setProfile(jsons.user);
      setProfileFilters(jsons.filters);
    }
    React.useEffect(() => {
        fetchProfile();
    }, [router]);
    

    
    return (
        <div style={{width:"100%"}}>   
        <Header></Header>
        
        {profile && <ProfileHero image = {profile.avatar.backgroundUrl}></ProfileHero>}

        {profile && <ProfileUser verified={profile.verified} avatar = {profile.avatar.url} name= {profile.username} info={profile.info}></ProfileUser>}
        {profile && profileFilters && <ProfileCollection user = {profile} filters = {profileFilters} items = {profile.nfts}></ProfileCollection>}

        <Footer></Footer>
        </div>
    );
 
}