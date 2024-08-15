import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/ContentHomePage/AboutUs/AboutUs'
import Posts from '../components/PostHomePage/Posts'
import Services from '../components/ServicesHomePage/Services'

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Posts />
      <Services />
    </div>
  )
}

export default Home
