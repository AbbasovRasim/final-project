import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import "./portfolio.css";
import axios from "axios";
import styles from "./style.module.css";

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
          <h1 className="Portfolioheader">Portfolio</h1>

          <Container>
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "space-between",
                marginBottom: "50px",
                marginTop: "50px",
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
                    className=" mb-5"
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
