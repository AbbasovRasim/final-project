import PageContainer from "../../components/PageContainer";
import Servicescontact from "../services/servicescontact";
import "./contact.css";

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareBehance } from "react-icons/fa6";

import { Container, Row, Col } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <div className="contact ">
        <PageContainer>
          <h1 className="contactheader "> Əlaqə</h1>
          <Container>
            <div className=" mm mt-5">
              <p style={{ color: "white" }}> +994 55 867 62 07 </p>

              <p style={{ color: "white" }}> +994 55 867 62 07 </p>

              <p style={{ color: "white" }}>ti_amazing@mail.ru</p>

              <p style={{ color: "white" }}>Baku şəh., Cavadxan 14 </p>
            </div>

            <div className="md mt-3 mb-5">
              <p>
                <BsInstagram /> Ti_amazing
              </p>
              <p>
                <BsWhatsapp /> +994 55 867 62 07
              </p>
              <p>
                <LuFacebook /> Ti_amazing
              </p>
              <p>
                <SlSocialLinkedin /> Ti_amazing
              </p>
              <p>
                <FaSquareBehance />
                Ti_amazing
              </p>
            </div>
          </Container>

          <h2 className="contactheader my-5 ">
            Layihə sifariş etmək istəyirsiniz?
            <br /> Online müraciət göndərin
          </h2>
          <Container>
            <Row className="align-item ">
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
