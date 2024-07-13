import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import "./portfolio.css";
import axios from "axios";
import Portfoliobuttons from "../../components/Portfoliobuttons";
import styles from "./style.module.css";

import { useEffect, useMemo, useState } from "react";
import Portfoliocard from "../../components/Portfoliocard";
import { useSearchParams } from "react-router-dom";
const URL = "http://localhost:3004/portfolio";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams] = useSearchParams(location);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setPortfolio(res.data);
    });
  }, []);

  useMemo(() => {
    const category = searchParams.get("category");

    if (category === "Bütün Layihələr" || category === null) {
      setFilteredData(portfolio);
    } else {
      const filtered = portfolio.filter((port) => category === port.category);
      setFilteredData(filtered);
    }
  }, [portfolio, searchParams]);

  return (
    <>
      <PageContainer>
        <div className="Portfoliobackground">
          <h1 className="Portfolioheader hr-lines">Portfolio</h1>

          <Container>
            <div className="my-5">
              <Portfoliobuttons />
            </div>

            <Row>
              {filteredData.length ? (
                filteredData.map((obj) => {
                  return (
                    <Col
                      key={obj.id}
                      className=" mb-5"
                      xs={6}
                      sm={6}
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
                })
              ) : (
                <h1 className="text-white my-5">
                  Fiterə uyğun proyekt tapılmadı
                </h1>
              )}
            </Row>
          </Container>
        </div>
      </PageContainer>
    </>
  );
};
export default Portfolio;
