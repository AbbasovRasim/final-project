import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
import { useEffect, useState } from "react";
import Servicecard from "../../components/Servicecard";
import Homejobstep from "../../components/homejobstep";
const URL = "http://localhost:3004/services";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setServices(res.data);
    });
  }, []);

  return (
    <>
      <div className="Portfoliobackground">
        <PageContainer>
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
            Xidmətlərimiz
          </h1>

          <Container>
            <Row>
              {services.map((obj) => {
                return (
                  <Servicecard
                    key={obj.id}
                    id={obj.id}
                    img={obj.img}
                    title={obj.title}
                    desc={obj.desc}
                  />
                );
              })}
            </Row>
          </Container>

          <h1 className="Servicestitle2 ">İşimizin mərhələləri</h1>
          <Container>
            <Row>
              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "42,96px",
                  }}
                >
                  <Homejobstep title="01" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "43,32px",
                  }}
                >
                  <Homejobstep desc="Ölçü Götürülməsi" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "25,27px",
                  }}
                >
                  <Homejobstep desc="Layihələrin mövcud vəziyyətinin mövcud vəziyyətinin ölçülərinin götürülməsi, qeydlərin aparılması" />
                </div>
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "42,96px",
                  }}
                >
                  <Homejobstep title="02" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "43,32px",
                  }}
                >
                  <Homejobstep desc="Bölgü planı" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "25,27px",
                  }}
                >
                  <Homejobstep desc="Məkanın beton elementlərini eləcə də havalandırma santexnika şaxtalarının yerlərini nəzərə alaraq müştərinin də istəklərinə uyğun " />
                </div>
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "42,96px",
                  }}
                >
                  <Homejobstep title="03" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "43,32px",
                  }}
                >
                  <Homejobstep desc="Mebel həlli planı" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "25,27px",
                  }}
                >
                  <Homejobstep desc="Bərpa planından sonra yenilənmiş layihənin otaq bölgülərinə əsasən müştərinin istəyi ilə birgə müəyyən standartları da nəzərə alaraq mebel yerləşiminin işlənməsi." />
                </div>
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "42,96px",
                  }}
                >
                  <Homejobstep title="04" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "43,32px",
                  }}
                >
                  <Homejobstep desc="Elektrik və santexnika təchizatı planı" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "25,27px",
                  }}
                >
                  <Homejobstep desc="Mebel həlli planı hazır olduqdan sonra yerləşimə əsasən elektrik və santexnika ölçülərinin işlənib hazırlanması." />
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "42,96px",
                  }}
                >
                  <Homejobstep title="05" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "43,32px",
                  }}
                >
                  <Homejobstep desc="Məkanın dizayn və vizualizasiyası" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "25,27px",
                  }}
                >
                  <Homejobstep desc="Yerləşim və mebel həlli planı hazır olduqdan sonra müştərinin də müəyyən istəkləri nəzərə alınaraq düzgün üslub seçimi ilə məkanın 3D, vizualizasiya işlərinin görülməsi." />
                </div>
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "42,96px",
                  }}
                >
                  <Homejobstep title="06" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "43,32px",
                  }}
                >
                  <Homejobstep desc="Tavan ölçüləri" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "25,27px",
                  }}
                >
                  <Homejobstep desc="Təsdiq olunmuş dizayna əsasən tavan alçıpan və elektrik ölçü xətlərinin düzgün işlənməsi. " />
                </div>
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "42,96px",
                  }}
                >
                  <Homejobstep title="07" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "43,32px",
                  }}
                >
                  <Homejobstep desc="Kosmetik işlərin görülməsi" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "25,27px",
                  }}
                >
                  <Homejobstep desc="Dizaynda istifadə olunmuş bütün materialların ölçülərinin çıxarılması və matrial alımı üçün bütün məlumatların hazırlanması" />
                </div>
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "42,96px",
                  }}
                >
                  <Homejobstep title="08" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "43,32px",
                  }}
                >
                  <Homejobstep desc="Dekor və mebel" />
                </div>
                <div
                  style={{
                    fontFamily: "San Francisco",
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "25,27px",
                  }}
                >
                  <Homejobstep desc="Dizaynda istifadə olunan bütün dekor və mebellərin ölçülərinin düzgün çıxarılması və müştərinin sifarişi üçün mebel dükanına göndərilməsi." />
                </div>
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    </>
  );
};

export default Services;
