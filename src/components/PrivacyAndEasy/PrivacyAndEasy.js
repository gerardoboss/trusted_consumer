import React from "react"
import styles from "./privacyandeasy.module.scss"
import { Container, Row, Col, Form } from "react-bootstrap"

const PrivacyAndEasy = () => (
  <Container fluid >
    <Row>
      <Col className={styles.privacy_easy}>
        <Container>
          <Row>
            <Col>
              <div className="title">
                Privacy and Easy Opt-Out
              </div>
              <div className="description">
                Please use the form below to make any opt-out or special request to Trusted Consumer partners. We will review every message to expedite your request to a business within our network.
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="name">
                    <Form.Label column={Row}>YOUR NAME</Form.Label>
                    <Form.Control/>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

export default PrivacyAndEasy
