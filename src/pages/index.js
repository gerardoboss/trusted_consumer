import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Menu from "../components/HeroMenu/menu"
import Partners from "../components/Partners/Partners"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Menu/>
    <Partners/>
  </Layout>
)

export default IndexPage
