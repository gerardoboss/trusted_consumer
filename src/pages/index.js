import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Menu from "../components/HeroMenu/menu"
import Partners from "../components/Partners/Partners"
import OurOffers from "../components/OurOffers/OurOffers"
import OurPromise from "../components/OurPromise/OurPromise"
import OptOut from "../components/OptOut/OptOut"
import PrivacyAndEasy from "../components/PrivacyAndEasy/PrivacyAndEasy"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  let whatWeDo;
  let support;
  let customer;
  return (
    <Layout>
      {data.allWordpressPost.nodes.map(function(node, i) {
        if (node.id === "0211a642-a5d3-5d87-8fd2-62b36c8fbcdc") {
          whatWeDo = node.content
        }
        if (node.id === "fdfe931a-e9e2-5045-b8b9-0f072b23aeb3") {
          support = node.content
        }
        if(node.id === "ad92ba31-1301-5c76-9593-09e158500bb1"){
          customer = node.content
        }
        return "";
      })}
      <Hero/>
      <Menu whatWeDoText={whatWeDo} supportText={support} consumerText={customer}/>
      <Partners/>
      <OurOffers/>
      <OurPromise/>
      <OptOut/>
      <PrivacyAndEasy/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
    {
        allWordpressPost {
            nodes {
                slug
                title
                content
                id
            }
        }
    }
`
