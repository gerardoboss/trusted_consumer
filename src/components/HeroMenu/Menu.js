import React from "react"
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap"
import styles from "./menu.module.scss"
import whatWeDo from "../../images/what_we_do.png"
import support from "../../images/support.png"
import consumer from "../../images/customer_benefit.png"

const Menu = () => (
  <Container className="{styles.small_menu}">
    <Row>
      <Col>
        <img src={whatWeDo} width="223" height="200" alt="What We Do" />
      </Col>
      <Col>
        <img src={support} width="217" height="171" alt="What We Do" />
      </Col>
      <Col>
        <img src={consumer} width="275" height="163" alt="What We Do" />
      </Col>
    </Row>
  </Container>
)

export default Menu
