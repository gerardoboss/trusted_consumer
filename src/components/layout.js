import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import  Seo  from "./Seo"

import Header from "./Header"
import Footer from "./Footer"
import style from "./layout.module.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container fluid>
      <Seo />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container className={style.main_container} fluid>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Footer/>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
