import PropTypes from "prop-types"
import React from "react"
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap"
import styles from "./header.module.scss"
import logo from "../images/trusted_consumer_logo.png"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <Container className={styles.header} fluid="true">
    <Row>
      <Col>
        <Container>
          <Row>
            <Col>
              <Navbar className="justify-content-between">
                <Navbar.Brand href="#home">
                  <img
                    src={logo}
                    width="265"
                    height="62"
                    alt="Trusted Consumer Logo"
                  />
                </Navbar.Brand>
                <Nav className={styles.trustBar}>
                  <Link to="/#heroMenu" className={styles.trustLink}>ABOUT TRUSTED CONSUMER</Link>
                  <Link className={styles.trustLink} to="/#partners">PARTNERS</Link>
                  <Link className={styles.trustLink} to="/#ourOffers">OUR OFFERS</Link>
                  <Link className={styles.trustLink} to="/#optOut">OPT OUT</Link>
                  <Link className={styles.trustLink} to="/#privacy">CONTACT US</Link>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
