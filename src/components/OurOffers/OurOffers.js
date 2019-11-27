import React from "react"
import styles from "./offers.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"


export default ({ title, content }) => {
  return (
    <Container className={styles.our_offers} id="ourOffers">
      <Row>
        <Col>
          <div className={styles.title}>
            OUR OFFERS
          </div>
          <div className={styles.sub_title}>
            {title}
          </div>
          <div className={styles.content}>
           {content}
          </div>
          <div className={styles.button_bar}>
            <Button variant="warning">LEARN MORE</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
