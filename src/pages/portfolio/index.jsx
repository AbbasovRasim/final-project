import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import "./portfolio.css";
import axios from "axios";
import Portfoliobuttons from "../../components/Portfoliobuttons";
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

              <div className=" justify-content-around d-flex mt-5 ">
                <Portfoliobuttons />
              </div>
            }
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
