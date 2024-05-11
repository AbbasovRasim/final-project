import PageContainer from "../../components/PageContainer";
import Servicescontact from "../services/servicescontact";
import "./contact.css";

import { Container, Row, Col } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <div className="contact ">
        <PageContainer>
          <h2
            style={{ color: "white", textAlign: "center", marginTop: "20px" }}
          >
            Layihə sifariş etmək istəyirsiniz?
            <br /> Online müraciət göndərin
          </h2>
          <Container>
            <Row>
              <Col className="mt-3" xs={12} sm={6} lg={6} xl={6}>
                <img src="header/photo17.png" alt="" />
              </Col>

              <Col className="mt-3" xs={12} sm={6} lg={6} xl={6}>
                <Servicescontact />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    </>
  );
};

export default Contact;
