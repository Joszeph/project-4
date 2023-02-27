import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

import Header from '../../src/components/header/Header'
import ProfileHero from '../../src/components/profile/ProfileHero'
import ProfileUser from '../../src/components/profile/ProfileUser'
import ProfileCollection from '../../src/components/profile/ProfileCollection'
import Footer from '../../src/components/footer/Footer'

// import profile from '../../data/profile.json'

export default function Profile({profile}) {

const router = useRouter()  
const {id} = router.query
const url= process.env.apiUrl

const [user, setUser] = useState([])
const [filters, setFilters] = useState([])

useEffect(async()=>{
  const response = await fetch(`${url}/users/${id}`)
  const result = await response.json()
  setUser(result)
  setFilters(result.filters)
})

  return (
    <div>
        <Header />
        <ProfileHero />
        <ProfileUser />
        <ProfileCollection user={user} filters={filters}/>
        <Footer />
    </div>
  )
}
