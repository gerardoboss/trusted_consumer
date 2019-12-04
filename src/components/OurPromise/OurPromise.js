import React from "react"
import styles from "./ourpromise.module.scss"
import { Container, Row, Col } from "react-bootstrap"

const OurPromise = ({privacyTitle, privacy, completeTransparencyTitle, completeTransparency, ownTitle, own}) => (
  <Container fluid  className={styles.our_promise} id="ourPromise">
    <Row>
      <Col>
        <Container className={styles.holder}>
          <Row>
            <Col>
              <div className={styles.content}>
                <div className={styles.title}>Our Promise</div>
                <div className={styles.points}>
                  <div className={styles.title} dangerouslySetInnerHTML={{__html: privacyTitle}} />
                  <div className={styles.content} dangerouslySetInnerHTML={{__html: privacy}} />
                </div>
                <div className={styles.points}>
                  <div className={styles.title} dangerouslySetInnerHTML={{__html: completeTransparencyTitle}}/>
                  <div className={styles.content} dangerouslySetInnerHTML={{__html: completeTransparency}}/>
                </div>
                <div className={styles.points}>
                  <div className={styles.title} dangerouslySetInnerHTML={{__html: ownTitle}}/>
                  <div className={styles.content} dangerouslySetInnerHTML={{__html: own}}/>
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
