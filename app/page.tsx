import React from 'react'
import HeroBlock1 from '@/components/HeroBlock1'
import FeautureBlock from '@/components/FeautureBlock'
import Listing from '@/components/Listing'
import Popular from '@/components/Popular'
import SignUp from '@/components/SignUp'
import Info from '@/components/Info'

const Home = () => {
  return (
    <div>
      <HeroBlock1/>
      <FeautureBlock/>
      <Listing/>
      <Popular/>
      <SignUp/>
      <Info/>
    
    </div>
  )
}

export default Home
