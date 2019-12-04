import React from "react"
import styles from "./privacyandeasy.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { createMuiTheme } from "@material-ui/core/styles"
// import { ThemeProvider } from "@material-ui/styles"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import { MuiThemeProvider } from "@material-ui/core"
import contactUsImage  from "../../images/contact_us_title.png"

const theme = createMuiTheme({
    palette: {
      type: 'dark',
      common: {
        black: 'rgba(255, 255, 255, 1)',
        white: 'rgba(255, 255, 255, 1)'
      },
      background: {
        paper: 'rgba(0, 0, 0, 1)',
        default: 'rgba(0, 0, 0, 1)'
      },
      primary: {
        light: 'rgba(255, 212, 129, 1)',
        main: 'rgba(251, 172, 14, 1)',
        dark: 'rgba(193, 131, 12, 1)',
        contrastText: '#fff'
      },
      secondary: {
        light: 'rgba(181, 178, 179, 1)',
        main: 'rgba(130, 130, 130, 1)',
        dark: 'rgba(159, 159, 159, 1)',
        contrastText: '#fff'
      },
      error: {
        light: 'rgba(158, 112, 251, 1)',
        main: 'rgba(90, 7, 255, 1)',
        dark: 'rgba(60, 0, 179, 1)',
        contrastText: '#fff'
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.87)',
        secondary: 'rgba(255, 255, 255, 1)',
        disabled: 'rgba(255, 255, 255, 1)',
        hint: 'rgba(255, 255, 255, 0.38)'
      }
    }
  }
)

const PrivacyAndEasy = ({contactUs}) => (
  <MuiThemeProvider theme={theme}>
    <Container fluid className={styles.privacy_easy} id="privacy">
      <Row>
        <Col className={styles.privacy_easy_inside}>
          <Container className={styles.title_privacy}>
            <Row className="justify-content-md-center">
              <Col md="6" className={styles.contact_image}>
                <img src={contactUsImage} alt="Contact Us"/>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="6">
                <div className={styles.title}>
                  Privacy and Easy Opt-Out
                </div>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: contactUs}}/>
              </Col>
            </Row>
            <Row>
              <Col className={styles.form_container}>
                  <form className={styles.privacy_form}>
                    <Container>
                      <Row>
                        <Col>
                          <FormControl fullWidth>
                            <InputLabel htmlFor="adornment-amount">Your Name</InputLabel>
                            <Input
                              id="adornment-amount"
                              value=""
                            />
                          </FormControl>
                        </Col>
                        <Col>
                          <FormControl fullWidth>
                            <InputLabel htmlFor="adornment-amount">Your Email</InputLabel>
                            <Input
                              id="adornment-amount"
                              value=""
                            />
                          </FormControl>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormControl fullWidth>
                            <InputLabel htmlFor="adornment-amount">Company</InputLabel>
                            <Input
                              id="adornment-amount"
                              value=""
                            />
                          </FormControl>
                        </Col>
                        <Col>
                          <FormControl fullWidth>
                            <InputLabel htmlFor="adornment-amount">Subject</InputLabel>
                            <Input
                              id="adornment-amount"
                              value=""
                            />
                          </FormControl>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormControl fullWidth>
                            <InputLabel htmlFor="adornment-amount">Your Message</InputLabel>
                            <Input
                              id="adornment-amount"
                              value=""
                            />
                          </FormControl>
                        </Col>
                      </Row>
                      <Row>
                        <Col className={styles.button_bar}>
                          <Button variant="contained" size="medium" color="primary">GET IN TOUCH</Button>
                        </Col>
                      </Row>
                    </Container>
                  </form>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </MuiThemeProvider>
)

export default PrivacyAndEasy
