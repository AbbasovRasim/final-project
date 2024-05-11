import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./portfoliosinglecard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";

const Portfoliosinglecard = () => {
  const param = useParams();
  const [portfolioDetailsData, setPortfolioDetailsData] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/portfolio/${param.pId}`)
      .then((res) => {
        setPortfolioDetailsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.pId]);

  return (
    <>
      <div className="portfoliosinglecard">
        <PageContainer>
          <Container>
            <h1
              style={{
                color: "white",
                font: "Baskerville",
                fontSize: "48px",
                fontWeight: "400",
                lineHeight: "50,48px",
                marginBottom: "50px",
              }}
            >
              {portfolioDetailsData.title1}
            </h1>

            <p style={{ color: "white", textAlign: "center" }}>
              {portfolioDetailsData.desc}
            </p>
            <p style={{ color: "white", textAlign: "center" }}>
              {portfolioDetailsData.desc}
            </p>
            <Row>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={portfolioDetailsData.img1} />
              </Col>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={portfolioDetailsData.img2} />
              </Col>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={portfolioDetailsData.img3} />
              </Col>
            </Row>

            <Row>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={portfolioDetailsData.img4} />
              </Col>
              <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={portfolioDetailsData.img5} />
              </Col>
              <Col className="mt-5 mb-5" xs={12} sm={4} lg={4} xl={4}>
                <Image src={portfolioDetailsData.img6} />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    </>
  );
};

export default Portfoliosinglecard;
