import Header from '../../src/components/header/Header'
import ProfileHero from '../../src/components/profile/ProfileHero'
import ProfileUser from '../../src/components/profile/ProfileUser'
import ProfileCollection from '../../src/components/profile/ProfileCollection'
import Footer from '../../src/components/footer/Footer'

import profile from '../../data/profile.json'

export default function Profile({profile}) {
  return (
    <div>
        <Header />
        <ProfileHero />
        <ProfileUser />
        <ProfileCollection />
        <Footer />
    </div>
  )
}
