import React from 'react'
import AvailableHobbies from '../components/AvailableHobbies'
import HowItWorks from '../components/HowItWorks'
import LandingSection from '../components/LandingSection'
import Nav from '../components/Nav'

function Index() {
  return (
    <div>
      <Nav />
      <LandingSection />
      <HowItWorks />
      <AvailableHobbies />
    </div>
  )
}

export default Index
