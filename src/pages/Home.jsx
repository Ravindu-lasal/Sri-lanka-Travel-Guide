import React from 'react'
import Hero from '../components/Hero'
import DestinationCard from '../components/DestinationCard'
import PackageCard from '../components/PackageCard'
import TravelAdvice from '../components/TravelAdvice'
import TripSteps from '../components/TripSteps'

function Home() {
  return (
    <div>
      <Hero />
      <DestinationCard />
      <PackageCard />
      <TravelAdvice />
      <TripSteps />
    </div>
  )
}

export default Home