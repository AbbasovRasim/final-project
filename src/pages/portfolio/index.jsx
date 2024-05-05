import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";

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
        <h1>Portfolio</h1>
        <Container>
          <Row>
            {portfolio.map((obj) => {
              return (
                <Col key={obj.id} className="mt-5" xs={12} sm={4} lg={4} xl={4}>
                  <Portfoliocard id={obj.id} img={obj.img} title={obj.title} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </PageContainer>
    </>
  );
};

export default Portfolio;
