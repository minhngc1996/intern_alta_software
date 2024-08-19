import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/ContentHomePage/AboutUs/AboutUs'
import Posts from '../components/ContentHomePage/PostHomePage/Posts'
import Services from '../components/ContentHomePage/ServicesHomePage/Services'
import BackgroundHome from './../components/ContentHomePage/BackgroundHome/BackgroundHome';

const Home = () => {
  return (
    <div>
      <BackgroundHome />
      <AboutUs />
      <Posts />
      <Services />
    </div>
  )
}

export default Home
