import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./hero.module.scss"
import trusted from "../../images/trusted_connection.png"

const Hero = () => (
  <Container fluid="true" className={styles.hero}>
    <Row >
      <Col  className={styles.trusted} md={{ span: 6, offset: 3 }}>
        <Container>
          <Row>
            <Col>
              <img src={trusted} alt="Trusted Connection"/>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

export default Hero
