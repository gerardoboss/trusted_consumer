import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./menu.module.scss"
import whatWeDo from "../../images/what_we_do.png"
import support from "../../images/support.png"
import consumer from "../../images/customer_benefit.png"
import welcome from "../../images/welcome_menu.png"

const Menu = () => (
  <Container className={styles.small_menu}>
    <Row>
      <Col className={styles.welcome_menu}>
        <img src={welcome} alt="Welcome to Trusted Consumer"/>
      </Col>
    </Row>
    <Row>
      <Col className={styles.privacy_leader}>
        Privacy Leader<br/>
        Streamlining Business Consumer Information
      </Col>
    </Row>
    <Row>
      <Col className={["align-self-end", styles.product_description].join(" ")}>
        <img src={whatWeDo} width="223" height="200" alt="What We Do" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</p>
        <p className={styles.learMore}>Learn More</p>
      </Col>
      <Col className={["align-self-end", styles.product_description].join(" ")}>
        <img src={support} width="217" height="171" alt="What We Do" />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        <p className={styles.learMore}>Learn More</p>
      </Col>
      <Col className={["align-self-end", styles.product_description].join(" ")}>
        <img src={consumer} width="275" height="163" alt="What We Do" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className={styles.learMore}>Learn More</p>
      </Col>
    </Row>
  </Container>
)

export default Menu
