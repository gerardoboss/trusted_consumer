import React from "react"
import styles from "./partners.module.scss"
import { Container, Row, Col, Modal, Dropdown, Button } from "react-bootstrap"

const Partners = ({ title, content, partnersEnergy, mortgagePartners, medicalPartners, debtPartners, durableMedicalPartners, homePartners, insurancePartners }) => {
  const [show, setShow] = React.useState(false)
  const [display, setDisplay] = React.useState(partnersEnergy)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let displayPartners = (partners) => {
    switch (partners) {
      case "energy":
        setDisplay(partnersEnergy);
        break
      case "mortgage":
        setDisplay(mortgagePartners);
        break
      case "medical":
        setDisplay(medicalPartners);
        break
      case "durable":
        setDisplay(durableMedicalPartners);
        break
      case "debt":
        setDisplay(debtPartners);
        break
      case "home":
        setDisplay(homePartners);
        break
      case "insurance":
        setDisplay(insurancePartners);
        break;
      default:
        setDisplay(partnersEnergy);
    }
  }
  return (
    <Container fluid className={["align-bottom", styles.partners].join(" ")} id="partners">
      <Row>
        <Col md={{ span: 7, offset: 5 }} className={["align-self-center", styles.content].join(" ")}>
          <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }}/>
          <div className={styles.partner_content} dangerouslySetInnerHTML={{ __html: content }}/>
          <div className={styles.button_bar}>
            <Button onClick={handleShow} className={styles.partner_button} variant="warning">
              VIEW OUR PARTNERS
            </Button>
          </div>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} animation={false} dialogClassName="modalWindow">
        <Modal.Header closeButton>
          <Modal.Title>
            <Dropdown onSelect={function(evt) {
              displayPartners(evt)
            }}>
              <Dropdown.Toggle variant="success">
                Choose Or Business Partners
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="energy"> Energy</Dropdown.Item>
                <Dropdown.Item eventKey="mortgage">Mortgage</Dropdown.Item>
                <Dropdown.Item eventKey="medical">Medical</Dropdown.Item>
                <Dropdown.Item eventKey="durable">Durable Medical</Dropdown.Item>
                <Dropdown.Item eventKey="home">Home Partners</Dropdown.Item>
                <Dropdown.Item eventKey="debt">Debt Partners</Dropdown.Item>
                <Dropdown.Item eventKey="insurance">Insurance Partners</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body dangerouslySetInnerHTML={{ __html: display }}/>
      </Modal>
    </Container>
  )
}

export default Partners
