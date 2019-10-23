import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Menu from "../components/HeroMenu/menu"
import Partners from "../components/Partners/Partners"
import OurOffers from "../components/OurOffers/OurOffers"
import OurPromise from "../components/OurPromise/OurPromise"
import OptOut from "../components/OptOut/OptOut"
import PrivacyAndEasy from "../components/PrivacyAndEasy/PrivacyAndEasy"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Menu/>
    <Partners/>
    <OurOffers/>
    <OurPromise/>
    <OptOut/>
    <PrivacyAndEasy/>
  </Layout>
)

export default IndexPage
