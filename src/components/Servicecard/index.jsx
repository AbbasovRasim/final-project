import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./services.css";
import styles from "./style.module.css";
import { CgArrowLongRight } from "react-icons/cg";

function Servicecard(props) {
  const { id, title, desc, img, desc1 } = props;

  return (
    <Row className="service-card ">
      <Col className="mt-5 service-card-left" xs={12} sm={6}>
        <img src={img} alt="" />
      </Col>
      <Col className="mt-5" xs={12} sm={6}>
        <h4 className="services-card-header"> {title}</h4>
        <p className="services-card-text"> {desc}</p>

        <Link
          className={`${styles["custom-container"]} ${styles["form-content"]}`}
          to={`/services/${id}`}
        >
          <button style={{ marginTop: "50px" }}>
            Daha ətraflı <CgArrowLongRight />
          </button>
        </Link>
      </Col>
    </Row>
  );
}
export default Servicecard;
