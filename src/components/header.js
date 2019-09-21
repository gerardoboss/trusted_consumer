import PropTypes from "prop-types"
import React from "react"
import { Navbar, Container, Row, Col } from "react-bootstrap"
import "./header.scss"
import logo from "../images/trusted_consumer_logo.png"
console.log(logo)

const Header = ({ siteTitle }) => (
  <Container className="header" fluid="true">
    <Row>
      <Col>
        <Container>
          <Row>
            <Col>
              <Navbar>
                <Navbar.Brand href="#home">
                  <img
                    src={logo}
                    width="265"
                    height="62"
                    alt="Trusted Consumer Logo"
                  />
                </Navbar.Brand>
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
