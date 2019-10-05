import React from "react"
import styles from "./privacyandeasy.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const PrivacyAndEasy = () => (
  <Container fluid className={styles.privacy_easy}>
    <Row>
      <Col className={styles.privacy_easy_inside}>
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
              <ThemeProvider theme={theme}>
              <form>
                <Container>
                  <Row>
                    <Col>
                      <TextField id="name" label="Name" margin="normal"/>
                    </Col>
                    <Col>
                      <TextField id="email" label="Email" margin="normal"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextField id="company" label="Company" margin="normal"/>
                    </Col>
                  <Col><TextField id="subject" label="Subject" margin="normal"/></Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextField id="message" label="Message" margin="normal"/>
                    </Col>
                  </Row>
                </Container>
              </form>
              </ThemeProvider>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
)

export default PrivacyAndEasy
