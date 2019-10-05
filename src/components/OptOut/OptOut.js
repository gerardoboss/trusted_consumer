import React from "react"
import styles from "./optout.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"

const OptOut = () => (
  <Container fluid className={styles.opt_out}>
    <Row>
      <Col>
        <Container>
          <Row>
            <Col className={styles.opt_out_inside}>
              <div className={styles.main_title}>
                <div className={styles.title}>
                  Opt Out of Interest-Based Advertising
                </div>
                <div className={styles.description}>
                  Welcome to the NAI's opt-out page where you can learn more about NAI members who deliver tailored online ads and your choices to opt-out of receiving them.
                </div>
              </div>
              <div className={styles.opt_outs}>
                <div className={styles.opt_out}>
                  <Button variant="outline-warning">Manage My Browser Opt-Out</Button>
                  <div className={styles.description}>Select "Manage My Browser's Opt Outs" to see which participating NAI members be engaging in the interest-Based Advertising on this browser and to choose which members IBA activities you wish to opt out of.</div>
                </div>
                <div className={styles.opt_out}>
                  <Button variant="outline-warning">Learn About Mobile Device Opt-Outs</Button>
                  <div className={styles.description}>Select "Manage My Browser's Opt Outs" to see which participating NAI members be engaging in the interest-Based Advertising on this browser and to choose which members IBA activities you wish to opt out of.</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

export default OptOut
