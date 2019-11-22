import React from "react"
import styles from "./partners.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'gatsby'

const Partners = () => (
  <Container fluid className={["align-bottom", styles.partners].join(" ")} id="partners">
    <Row>
      <Col md={{ span: 7, offset: 5 }} className={["align-self-center", styles.content].join(" ")}>
       <div className={styles.title}>PARTNERS</div>
        <div className={styles.partner_content}>
          The Trusted Consumer network connects consumers with TCPA and TSR opt-in business listings making it easier for consumers to control information they provided to businesses
        </div>
        <div className={styles.button_bar}>
          <Link className={styles.partner_button} to="/partners/" state={{modal: true }}>VIEW OUR PARTNERS</Link>
        </div>
      </Col>
    </Row>
  </Container>
)

export default Partners
