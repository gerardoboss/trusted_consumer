import React from "react"
import styles from "./optout.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap"

const OptOut = ({browserOptOut, deviceOptOut, browserOptOutTitle, deviceOptOutTitle, optOut, optOutTitle}) => (
  <Container fluid className={styles.opt_out} id="optOut">
    <Row>
      <Col>
        <Container>
          <Row>
            <Col className={styles.opt_out_inside}>
              <div className={styles.main_title}>
                <div className={styles.title} dangerouslySetInnerHTML={{__html: optOutTitle}}/>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: optOut}}/>
              </div>
              <div className={styles.opt_outs}>
                <div className={styles.opt_out}>
                  <Button variant="outline-warning" className={styles.output_button} dangerouslySetInnerHTML={{__html: browserOptOutTitle}}/>
                  <div className={styles.description} dangerouslySetInnerHTML={{__html: browserOptOut}}/>
                </div>
                <div className={styles.opt_out}>
                  <Button variant="outline-warning" className={styles.output_button} dangerouslySetInnerHTML={{__html: deviceOptOutTitle}}/>
                  <div className={styles.description} dangerouslySetInnerHTML={{__html: deviceOptOut}}/>
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
