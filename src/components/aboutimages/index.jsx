import { Container, Row, Col } from "react-bootstrap";
import "./aboutimages.css";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareBehance } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiTarget } from "react-icons/fi";

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
        <div className="d-flex flex-lg-row flex-column mt-5 md mt-3 mb-5">
          <Link
            className="d-flex align-items-center gap-2 link-light text-decoration-none"
            target={"_blank"}
            to={"https://www.instagram.com/"}
          >
            <BsInstagram style={{ verticalAlign: "sub" }} /> Ti_amazing
          </Link>
          <Link
            className="d-flex align-items-center gap-2 link-light text-decoration-none"
            target={"_blank"}
            to={"https://whatsapp.com/"}
          >
            <BsWhatsapp style={{ verticalAlign: "sub" }} /> +994 55 867 62 07
          </Link>
          <Link
            className="d-flex align-items-center gap-2 link-light text-decoration-none"
            target={"_blank"}
            to={"https://facebook.com/"}
          >
            <LuFacebook style={{ verticalAlign: "sub" }} />
            Ti_amazing
          </Link>
          <Link
            className="d-flex align-items-center gap-2 link-light text-decoration-none"
            target={"_blank"}
            to={"https://az.linkedin.com/"}
          >
            <SlSocialLinkedin style={{ verticalAlign: "sub" }} />
            Ti_amazing
          </Link>
          <Link
            className="d-flex align-items-center gap-2 link-light text-decoration-none"
            target={"_blank"}
            to={"https://www.behance.net/"}
          >
            <FaSquareBehance style={{ verticalAlign: "sub" }} /> Ti_amazing{" "}
          </Link>
        </div>

        {/* <div className="d-flex flex-lg-row mt-5 md mt-3 pb-3">
          <div className=" d-flex  md flex-lg-row  flex-column ">
            <Link
              className="d-flex align-items-center gap-2 link-light text-decoration-none"
              target={"_blank"}
              to={"https://www.instagram.com/"}
            >
              <BsInstagram style={{ verticalAlign: "sub" }} />
              Ti_amazing
            </Link>
            <Link
              className="d-flex align-items-center gap-2 link-light text-decoration-none"
              target={"_blank"}
              to={"https://whatsapp.com/"}
            >
              <BsWhatsapp style={{ verticalAlign: "sub" }} />
              +994 55 867 62 07
            </Link>
          </div>
          <div className="d-flex  md flex-row ">
            <Link
              className="d-flex align-items-center gap-2 link-light text-decoration-none"
              target={"_blank"}
              to={"https://facebook.com/"}
            >
              <LuFacebook style={{ verticalAlign: "sub" }} /> Ti_amazing
            </Link>
          </div>
          <div className=" d-flex  md flex-lg-row  flex-column ">
            <Link
              className="d-flex align-items-center gap-2 link-light text-decoration-none"
              target={"_blank"}
              to={"https://az.linkedin.com/"}
            >
              <SlSocialLinkedin style={{ verticalAlign: "sub" }} /> Ti_amazing
            </Link>
            <Link
              className="d-flex align-items-center gap-2 link-light text-decoration-none"
              target={"_blank"}
              to={"https://www.behance.net/"}
            >
              <FaSquareBehance style={{ verticalAlign: "sub" }} /> Ti_amazing
            </Link>
          </div>
          <div></div>
        </div> */}
      </div>
    </Container>
  );
};

export default Aboutimages;
