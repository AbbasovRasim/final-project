import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";

const Portfoliosinglecard = () => {
  const param = useParams();
  const [serviceDetailsData, setServiceDetailsData] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/portfolio/${param.pId}`)
      .then((res) => {
        setServiceDetailsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.pId]);

  return (
    <>
      <PageContainer>
        <div style={{ backgroundColor: "gray" }}>
          <h1 style={{ color: "white" }}>Yataq Otağı</h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <p style={{ color: "white", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <Container>
            <Row>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={serviceDetailsData.img1} />
              </Col>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={serviceDetailsData.img2} />
              </Col>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={serviceDetailsData.img3} />
              </Col>
            </Row>

            <Row>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={serviceDetailsData.img4} />
              </Col>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={serviceDetailsData.img5} />
              </Col>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={serviceDetailsData.img6} />
              </Col>
            </Row>
          </Container>
        </div>{" "}
      </PageContainer>
    </>
  );
};

export default Portfoliosinglecard;
