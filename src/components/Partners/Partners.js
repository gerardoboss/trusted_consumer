import React from "react"
import styles from "./partners.module.scss"
import { Container, Row, Col, Modal, Button, ModalTitle } from "react-bootstrap"

const Partners = ({title, content, energyPartners}) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
  <Container fluid className={["align-bottom", styles.partners].join(" ")} id="partners">
    <Row>
      <Col md={{ span: 7, offset: 5 }} className={["align-self-center", styles.content].join(" ")}>
       <div className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>
        <div className={styles.partner_content} dangerouslySetInnerHTML={{__html: content}}/>
        <div className={styles.button_bar}>
          <button onClick={handleShow} className={styles.partner_button}>
            VIEW OUR PARTNERS
          </button>
        </div>
      </Col>
    </Row>
    <Modal show={show} onHide={handleClose} animation={false} dialogClassName="modalWindow">
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{__html: energyPartners}}/>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </Container>
  )}

export default Partners
