import React from "react"
import styles from "./ourpromise.module.scss"
import { Container, Row, Col } from "react-bootstrap"

const OurPromise = () => (
  <Container fluid  className={styles.our_promise}>
    <Row>
      <Col>
        <Container className={styles.holder}>
          <Row>
            <Col>
              <div className={styles.content}>
                <div className={styles.title}>Our Promise</div>
                <div className={styles.points}>
                  <div className={styles.title}>
                    Privacy is your right!
                  </div>
                  <div className={styles.content}>
                    Ship it user story iterate engaging co-working intuitive pitch deck hacker prototype SpaceTeam user centered design big data. Ship it user story iterate engaging
                  </div>
                </div>
                <div className={styles.points}>
                  <div className={styles.title}>
                    Complete Transparency
                  </div>
                  <div className={styles.content}>
                    Ship it user story iterate engaging co-working intuitive pitch deck hacker prototype SpaceTeam user centered design big data.
                  </div>
                </div>
                <div className={styles.points}>
                  <div className={styles.title}>
                    Own Your Data
                  </div>
                  <div className={styles.content}>
                    Ship it user story iterate engaging co-working intuitive pitch deck hacker prototype SpaceTeam user centered design big data  co-working intuitive pitch deck  co-working intuitive pitch deck  co-working intuitive pitch deck
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

export default OurPromise
