import React from 'react'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import OurCustomers from '../components/OurCustomers'
import OurTeam from '../components/OurTeam'
import Subscription from '../components/Subscription'

function Home() {
  return (
    <div>
      <Service />
      <Portfolio />
      <OurCustomers />
      <OurTeam />
      <Subscription />
    </div>
  )
}

export default Home
