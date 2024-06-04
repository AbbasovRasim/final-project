import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { Image } from "react-bootstrap";

import { useEffect, useState } from "react";
import axios from "axios";

const Portfoliobuttonsingle = () => {
  const param = useParams();
  const [
    PortfoliobuttonsingleDetailsData,
    setPortfoliobuttonsingleDetailsData,
  ] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/PortfolioallCards/${param.pId}`)
      .then((res) => {
        setPortfoliobuttonsingleDetailsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.pId]);

  return (
    <>
      <div className="Servicesbackground">
        <PageContainer>
          <Container>
            <h1 className="Servicestitle2 hr-lin ">
              {PortfoliobuttonsingleDetailsData.title2}
            </h1>
            <Row>
              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                <Image src={PortfoliobuttonsingleDetailsData.img2} />
              </Col>
              <Col className="mt-5 servicesdesc2" xs={12} sm={6} lg={6} xl={6}>
                {PortfoliobuttonsingleDetailsData.desc2}
              </Col>
            </Row>
            <h1 className="Servicestitle2">
              {PortfoliobuttonsingleDetailsData.title3}
            </h1>
          </Container>

          <h2 className="servicesheader">
            Layihə sifariş etmək istəyirsiniz? <br />
            Online müraciət göndərin
          </h2>
          <Container>
            <Row className="align-item">
              <Col className="mt-3 mb-3" xs={12} sm={6} lg={6} xl={6}>
                <Image src={PortfoliobuttonsingleDetailsData.img2} />
              </Col>
              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}></Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    </>
  );
};

export default Portfoliobuttonsingle;
