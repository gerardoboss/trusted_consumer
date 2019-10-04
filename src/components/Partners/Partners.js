import React from "react"
import styles from "./partners.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"

const Partners = () => (
  <Container fluid className={["align-bottom", styles.partners].join(" ")}>
    <Row>
      <Col md={{ span: 7, offset: 5 }} className={["align-self-center", styles.content].join(" ")}>
       <div className={styles.title}>PARTNERS</div>
        <div className={styles.partner_content}>
          The Trusted Consumer network connects consumers with TCPA and TSR opt-in business listings making it easier for consumers to control information they provided to businesses
        </div>
        <div className={styles.button_bar}>
          <Button variant="warning" className={styles.partner_button}>VIEW OUR PARTNERS</Button>
        </div>
      </Col>
    </Row>
  </Container>
)

export default Partners
