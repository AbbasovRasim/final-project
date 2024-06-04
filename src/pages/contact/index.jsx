import PageContainer from "../../components/PageContainer";
import Servicescontact from "../services/servicescontact";
import "./contact.css";

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareBehance } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <div className="contact ">
        <PageContainer>
          <h1 className="contactheader  hr-lines"> Əlaqə</h1>
          <Container>
            <div className=" d-flex flex-lg-row  mt-5  mm">
              <div className="d-flex md  flex-lg-row flex-column">
                <p style={{ color: "white" }}> +994 55 867 62 07 </p>
                <p style={{ color: "white" }}> +994 55 867 62 07 </p>
              </div>
              <div className="d-flex md  flex-lg-row flex-column">
                <p style={{ color: "white" }}>ti_amazing@mail.ru</p>

                <p style={{ color: "white" }}>Baku şəh., Cavadxan 14 </p>
              </div>
            </div>

            <div className="         d-flex flex-lg-row flex-column mt-5 md mt-3 mb-5">
              <Link
                className="d-flex align-items-center gap-2 link-light text-decoration-none"
                target={"_blank"}
                to={"https://www.instagram.com/"}
              >
                <BsInstagram style={{ verticalAlign: "sub" }} /> Ti_amazing
              </Link>
              <Link
                className="      d-flex align-items-center gap-2 link-light text-decoration-none"
                target={"_blank"}
                to={"https://whatsapp.com/"}
              >
                <BsWhatsapp style={{ verticalAlign: "sub" }} /> +994 55 867 62
                07
              </Link>
              <Link
                className="      d-flex align-items-center gap-2 link-light text-decoration-none"
                target={"_blank"}
                to={"https://facebook.com/"}
              >
                <LuFacebook style={{ verticalAlign: "sub" }} />
                Ti_amazing
              </Link>
              <Link
                className="   d-flex  align-items-center gap-2 link-light text-decoration-none"
                target={"_blank"}
                to={"https://az.linkedin.com/"}
              >
                <SlSocialLinkedin style={{ verticalAlign: "sub" }} />
                Ti_amazing
              </Link>
              <Link
                className="    d-flex   align-items-center gap-2 link-light text-decoration-none"
                target={"_blank"}
                to={"https://www.behance.net/"}
              >
                <FaSquareBehance style={{ verticalAlign: "sub" }} /> Ti_amazing{" "}
              </Link>
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

              <Col className="mt-5 pb-3" xs={12} sm={6} lg={6} xl={6}>
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
