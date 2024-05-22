import { Container, Row, Col } from "react-bootstrap";
import "./aboutimages.css";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareBehance } from "react-icons/fa6";

const Aboutimages = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-3" xs={12} sm={3} lg={3} xl={3}>
          <img src="header/photo20.png" alt="" />
        </Col>
        <Col className="mt-3" xs={12} sm={3} lg={3} xl={3}>
          <img src="header/photo21.png" alt="" />
        </Col>
        <Col className="mt-3" xs={12} sm={3} lg={3} xl={3}>
          <img src="header/photo22.png" alt="" />
        </Col>
        <Col className="mt-3" xs={12} sm={3} lg={3} xl={3}>
          <img src="header/photo20.png" alt="" />
        </Col>
      </Row>
      <Row>
        <Col className="mt-3" xs={12} sm={3} lg={3} xl={3}>
          <img src="header/photo20.png" alt="" />
        </Col>
        <Col className="mt-3" xs={12} sm={3} lg={3} xl={3}>
          <img src="header/photo21.png" alt="" />
        </Col>
        <Col className="mt-3" xs={12} sm={3} lg={3} xl={3}>
          <img src="header/photo22.png" alt="" />
        </Col>
        <Col className="mt-3" xs={12} sm={3} lg={3} xl={3}>
          <img src="header/photo20.png" alt="" />
        </Col>
      </Row>
      <div className="border mt-5 mb-5">
        <div className=" mm mt-5 ">
          <p style={{ color: "white" }}> +994 55 867 62 07 </p>

          <p style={{ color: "white" }}> +994 55 867 62 07 </p>

          <p style={{ color: "white" }}>ti_amazing@mail.ru</p>

          <p style={{ color: "white" }}>Baku şəh., Cavadxan 14 </p>
        </div>
        <div className="md mt-3 mb-5">
          <p>
            <BsInstagram style={{ vertica: "middle" }} /> Ti_amazing
          </p>
          <p>
            <BsWhatsapp /> +994 55 867 62 07
          </p>
          <p>
            <LuFacebook style={{ verticalAlign: "middle" }} />
            Ti_amazing
          </p>
          <p>
            <SlSocialLinkedin />
            Ti_amazing
          </p>
          <p>
            <FaSquareBehance /> Ti_amazing{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Aboutimages;
