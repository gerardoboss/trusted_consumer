import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./menu.module.scss"
import whatWeDo from "../../images/what_we_do.png"
import support from "../../images/support.png"
import consumer from "../../images/customer_benefit.png"
import welcome from "../../images/welcome_menu.png"

const Menu = ({whatWeDoText, supportText, consumerText}) => (
  <Container className={styles.small_menu} id="heroMenu">
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
        <div className={styles.product_image}>
          <img src={whatWeDo} width="223" height="200" alt="What We Do" />
        </div>
        <p className={styles.product_text} dangerouslySetInnerHTML={{__html: whatWeDoText}}/>
        <p className={styles.learMore}>Learn More</p>
      </Col>
      <Col className={["align-self-end", styles.product_description].join(" ")}>
        <div className={styles.product_image}><img src={support} width="217" height="171" alt="What We Do" /></div>
        <p className={styles.product_description} dangerouslySetInnerHTML={{__html: supportText}}/>
        <p className={styles.learMore}>Learn More</p>
      </Col>
      <Col className={["align-self-end", styles.product_description].join(" ")}>
        <div className={styles.product_image}>
          <img src={consumer} width="275" height="163" alt="What We Do" />
        </div>
        <p className={styles.product_text} dangerouslySetInnerHTML={{__html: consumerText}} />
        <p className={styles.learMore}>Learn More</p>
      </Col>
    </Row>
  </Container>
)



export default Menu
