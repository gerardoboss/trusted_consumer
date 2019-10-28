import React from "react"
import styles from "./offers.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"

const OurOffers = () => (
  <Container className={styles.our_offers} id="ourOffers">
    <Row>
      <Col>
        <div className={styles.title}>
          OUR OFFERS
        </div>
        <div className={styles.sub_title}>
          Pro Consumer and Special Offers
        </div>
        <div className={styles.content}>
          As an added benefit, Trusted Consumer encourages partner businesses to provide discounts and special offers to customers. If you receive a special offer, Trusted Consumer is a non-affiliated party and cannot guarantee any partner offer. Please defer to the business participating in Trusted Consumer network for terms, conditions, and special offer information.
        </div>
        <div className={styles.button_bar}>
          <Button variant="warning">LEARN MORE</Button>
        </div>
      </Col>
    </Row>
  </Container>
)

export default OurOffers
