import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import "./style.css";
function Servicecard(props) {
  const { id, title, desc, img } = props;

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
        <h4>{title}</h4>
        <p> {desc}</p>
        <Link to={`/services/${id}`}>
          <button> Daha etrafli</button>
        </Link>
      </Col>
    </Row>
  );
}
export default Servicecard;
