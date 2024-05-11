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

          <h1 className="Servicestitle2">İşimizin mərhələləri</h1>
          <Container>
            <Row>
              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Homejobstep title="01" />
                <Homejobstep desc="Ölçü Götürülməsi" />
                <Homejobstep desc="Layihələrin mövcud vəziyyətinin mövcud vəziyyətinin ölçülərinin götürülməsi, qeydlərin aparılması" />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Homejobstep title="02" />
                <Homejobstep desc="Bölgü planı" />
                <Homejobstep desc="Məkanın beton elementlərini eləcə də havalandırma santexnika şaxtalarının yerlərini nəzərə alaraq müştərinin də istəklərinə uyğun " />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Homejobstep title="03" />
                <Homejobstep desc="Mebel həlli planı" />
                <Homejobstep desc="Bərpa planından sonra yenilənmiş layihənin otaq bölgülərinə əsasən müştərinin istəyi ilə birgə müəyyən standartları da nəzərə alaraq mebel yerləşiminin işlənməsi." />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Homejobstep title="04" />
                <Homejobstep desc="Elektrik və santexnika təchizatı planı" />
                <Homejobstep desc="Mebel həlli planı hazır olduqdan sonra yerləşimə əsasən elektrik və santexnika ölçülərinin işlənib hazırlanması." />
              </Col>
            </Row>

            <Row>
              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Homejobstep title="05" />
                <Homejobstep desc="Məkanın dizayn və vizualizasiyası" />
                <Homejobstep desc="Yerləşim və mebel həlli planı hazır olduqdan sonra müştərinin də müəyyən istəkləri nəzərə alınaraq düzgün üslub seçimi ilə məkanın 3D, vizualizasiya işlərinin görülməsi." />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Homejobstep title="06" />
                <Homejobstep desc="Tavan ölçüləri" />
                <Homejobstep desc="Təsdiq olunmuş dizayna əsasən tavan alçıpan və elektrik ölçü xətlərinin düzgün işlənməsi. " />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Homejobstep title="07" />
                <Homejobstep desc="Kosmetik işlərin görülməsi" />
                <Homejobstep desc="Dizaynda istifadə olunmuş bütün materialların ölçülərinin çıxarılması və matrial alımı üçün bütün məlumatların hazırlanması" />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Homejobstep title="08" />
                <Homejobstep desc="Dekor və mebel" />
                <Homejobstep desc="Dizaynda istifadə olunan bütün dekor və mebellərin ölçülərinin düzgün çıxarılması və müştərinin sifarişi üçün mebel dükanına göndərilməsi." />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    </>
  );
};

export default Services;
