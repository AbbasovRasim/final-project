import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./servicesingle.css";
import { Image } from "react-bootstrap";
import Servicescontact from "../services/servicescontact";

import { useEffect, useState } from "react";
import axios from "axios";

const Servicesingle = () => {
  const param = useParams();
  const [servicesDetailsData, setServicesDetailsData] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/services/${param.sId}`)
      .then((res) => {
        setServicesDetailsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.sId]);

  return (
    <>
      <div className="Servicesbackground">
        <PageContainer>
          <Container>
            <h1 className="Servicestitle2">{servicesDetailsData.title2}</h1>
            <Row>
              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                <Image src={servicesDetailsData.img2} />
              </Col>
              <Col className="mt-5 servicesdesc2" xs={12} sm={6} lg={6} xl={6}>
                {servicesDetailsData.desc2}
              </Col>
            </Row>
            <h1 className="Servicestitle2">{servicesDetailsData.title3}</h1>
          </Container>

          <h2 style={{ color: "white", textAlign: "center" }}>
            Layihə sifariş etmək istəyirsiniz? <br />
            Online müraciət göndərin
          </h2>
          <Container>
            <Row>
              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                <Image src={servicesDetailsData.img2} />
              </Col>
              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                <Servicescontact />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    </>
  );
};

export default Servicesingle;
