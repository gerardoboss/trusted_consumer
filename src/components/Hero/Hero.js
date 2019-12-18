import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./hero.module.scss"
import trusted from "../../images/trusted_connection.png"
import { Link } from "gatsby"

const Hero = () => (
  <Container fluid="true" className={styles.hero} id="hero">
    <Row className={styles.trusted_row}>
      <Col  className={styles.trusted} md={{ span: 6, offset: 3 }}>
        <Container>
          <Row>
            <Col className={styles.trustedLogo}>
              <Link  to="/#partners"><img src={trusted} alt="Trusted Connection" border="0"/></Link>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

export default Hero
