import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HomeCom/HeroSection/HeroSection'
import AIAssistant from '../../components/AIAssistant/AIAssistant'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import ExperienceSection from '../../components/HomeCom/ExperienceSection/ExperienceSection'
import SignatureMenu from '../../components/SignatureMenu/SignatureMenu'
import AmbienceSection from '../../components/HomeCom/AmbienceSection/AmbienceSection'
import TestimonialsSection from '../../components/HomeCom/TestimonialsSection/TestimonialsSection'
import ReservationSection from '../../components/HomeCom/ReservationSection/ReservationSection'
const Home = () => {
  return (
    <>
    <Navbar/>
    <main>
        <HeroSection/>
        <ExperienceSection/>
        <SignatureMenu/>
        <AmbienceSection/>
        <TestimonialsSection/>
        <ReservationSection/>
    </main>
   
    <Footer/>
    </>
  )
}

export default Home