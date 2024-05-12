import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import "./portfolio.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Portfoliocard from "../../components/Portfoliocard";
const URL = "http://localhost:3004/portfolio";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setPortfolio(res.data);
    });
  }, []);

  return (
    <>
      <PageContainer>
        <div className="Portfoliobackground">
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
            Portfolio
          </h1>

          <Container>
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "space-between",
              }}
            >
              <button style={{ width: "15%" }}>Bütün layihələr</button>
              <button style={{ width: "15%" }}>Interyer Dizayn</button>
              <button style={{ width: "25%" }}>
                Eksteryer ve Landshaft dizayn
              </button>
              <button style={{ width: "25%" }}>
                Ticarət Obyektlərinin dizaynı
              </button>

              <button style={{ width: "15%" }}>Layihələndirmə</button>
            </div>
            <Row>
              {portfolio.map((obj) => {
                return (
                  <Col
                    key={obj.id}
                    className="mt-5  "
                    xs={12}
                    sm={4}
                    lg={4}
                    xl={4}
                  >
                    <Portfoliocard
                      id={obj.id}
                      img={obj.img}
                      title={obj.title}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </PageContainer>
    </>
  );
};

export default Portfolio;
