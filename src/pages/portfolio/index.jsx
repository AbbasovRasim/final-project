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
            {
              // <div
              //   className=" justify-content-around d-flex flex-lg-row flex-column "
              //   style={{
              //     gap: "15px",
              //     marginBottom: "50px",
              //     marginTop: "50px",
              //     borderColor: "white",
              //   }}
              // >
              //   <button className="  w-25 bg-transparent border">
              //     Bütün layihələr
              //   </button>
              //   <button className="w-25  w-25 bg-transparent border">
              //     Interyer Dizayn
              //   </button>
              //   <button className="w-50 w-25 bg-transparent border">
              //     Eksteryer ve Landshaft dizayn
              //   </button>
              //   <button className="w-50 w-25 bg-transparent border">
              //     Ticarət Obyektlərinin dizaynı
              //   </button>
              //   <button className="w-25 w-25 bg-transparent border">
              //     Layihələndirmə
              //   </button>
              // </div>

              <div className="justify-content-between d-flex my-5 gap-4">
                <Portfoliobuttons />
              </div>
            }
            <Row>
              {filteredData.length ? (
                filteredData.map((obj) => {
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
