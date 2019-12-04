import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet"

const Seo = ({title, description, keywords, robots}) => (
  <StaticQuery
    query={query}
    render={({
               site: {
                 siteMetadata: {
                   defaultTitle,
                   defaultDescription,
                   defaultKeywords,
                   defaultRobots,
                 },
               },
             }) => {
      const seo = {
        title: title ||  defaultTitle,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        robots: robots || defaultRobots,
      }
      return (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description}/>
          <meta name="keywords" content={seo.keywords}/>
          <meta name="robot" content={seo.robots}/>
        </Helmet>

      )
    }}/>
)

export default Seo

const query = graphql`
    {
        site{
            siteMetadata{
                defaultTitle: title
                defaultDescription: description
                defaultKeywords: keywords
                defaultRobots: robots
            }
        }
    }
`
