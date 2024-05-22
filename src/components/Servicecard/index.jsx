import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import "./services.css";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "./style.module.css";
function Servicecard(props) {
  const { id, title, desc, img, desc1 } = props;

  return (
    // <Card>
    //   <Card.Img variant="top" src={img} />

    //   <Link to={`/portfolio/${id}`}>{title}</Link>
    // </Card>

    <Row className="service-card">
      <Col className="mt-5 service-card-left" xs={12} sm={6}>
        <img src={img} alt="" />
      </Col>
      <Col className="mt-5" xs={12} sm={6}>
        <h4 style={{ paddingTop: "50px", color: "white" }}>{title}</h4>
        <p style={{ color: "white" }}> {desc}</p>
        <Link to={`/services/${id}`}>
          <button style={{ marginTop: "50px" }}>Daha ətraflı</button>
        </Link>
      </Col>
    </Row>
  );
}
export default Servicecard;
