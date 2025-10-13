import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/MainHeader/Main'
import AboutSection from '../../components/AboutSection/AboutSection'
import AboutMeSection from '../../components/AboutMeSection/AboutMeSection'
import ResumeSection from '../../components/ResumeSection/ResumeSection'
import Projects from '../../components/Projects/Projects'
import ExploreSection from '../../components/ExploreSection/ExploreSection'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

function Hero() {
  return (
    <>

     <Main />
      <Header />
            <AboutSection />
          <AboutMeSection />
          <ResumeSection />
          <Projects />
          <ExploreSection />
          <Contact />
          <Footer />

    </>
  )
}

export default Hero
