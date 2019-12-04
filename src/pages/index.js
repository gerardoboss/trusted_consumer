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
  //let ourPartners;
  let contactUs;
  let browserOptOut;
  let browserOptOutTitle;
  let deviceOptOut;
  let deviceOptOutTitle;
  let optOut;
  let optOutTitle;
  let privacyRight;
  let privacyRightTitle;
  let completePrivacy;
  let completePrivacyTitle;
  let ownYourData;
  let ownYourDataTitle;
  let offersTitle;
  let offersContent;
  let partnersContent;
  let partnersTitle;
  return (
    <Layout>
      {data.allWordpressPost.nodes.map(function(node, i) {
        switch (node.id) {
          case "0211a642-a5d3-5d87-8fd2-62b36c8fbcdc":
            whatWeDo = node.content;
            break;
          case "fdfe931a-e9e2-5045-b8b9-0f072b23aeb3":
            support = node.content
            break
          case "ad92ba31-1301-5c76-9593-09e158500bb1":
            customer = node.content;
            break
          case "1baa564b-27e4-56c5-ba61-43922af18579":
            contactUs = node.content
            break
          case "381a180a-16fa-5b1c-96b8-6568320fb248":
            optOut = node.content;
            optOutTitle = node.title;
            break
          case "30fb2f15-25d0-5cf6-98e8-69c9741749e7":
            deviceOptOut = node.content
            deviceOptOutTitle = node.title
            break
          case "9358b138-153e-5490-bcb1-41671ee52444":
            browserOptOut = node.content
            browserOptOutTitle = node.title
            break
          case "f12dce93-9954-527c-9737-b253ca2ad7e3":
            privacyRight = node.content
            privacyRightTitle = node.title
            break
          case "de0029ea-f86e-5d6a-a0e6-45fc5abbd553":
            completePrivacy = node.content
            completePrivacyTitle = node.title
            break
          case "d0bfc917-bbbc-55f9-b19e-4616592e3f0e":
            ownYourData = node.content
            ownYourDataTitle = node.title
            break
          case "4b018c57-8bc1-5bd8-9009-3d6794f9af10":
            offersContent = node.content
            offersTitle = node.title
            break
          case "2040cc3a-092a-58e7-84ab-14e3551d1c5f":
            partnersContent = node.content
            partnersTitle = node.title
            break
          default:
        }
        return ""
      })}
      <Hero/>
      <Menu whatWeDoText={whatWeDo} supportText={support} consumerText={customer}/>
      <Partners title={partnersTitle} conent={partnersContent}/>
      <OurOffers content={offersContent} title={offersTitle}/>
      <OurPromise privacy={privacyRight} privacyTitle={privacyRightTitle} completeTransparency={completePrivacy} completeTransparencyTitle={completePrivacyTitle} own={ownYourData} ownTitle={ownYourDataTitle}/>
      <OptOut browserOptOut={browserOptOut} browserOptOutTitle={browserOptOutTitle} deviceOptOut={deviceOptOut}
              deviceOptOutTitle={deviceOptOutTitle} optOut={optOut} optOutTitle={optOutTitle}/>
      <PrivacyAndEasy contactUs={contactUs}/>
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
