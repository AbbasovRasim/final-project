import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
import { useEffect, useState } from "react";
import Servicecard from "../../components/Servicecard";
import Servicesjobstep from "../../components/servicesjobstep";
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

          <h1 className="servicesheader ">İşimizin mərhələləri</h1>
          <Container>
            {" "}
            <Row>
              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Servicesjobstep title="01" />

                <Servicesjobstep desc="Ölçü Götürülməsi" />

                <Servicesjobstep desc1="Layihələrin mövcud vəziyyətinin mövcud vəziyyətinin ölçülərinin götürülməsi, qeydlərin aparılması" />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Servicesjobstep title="02" />

                <Servicesjobstep desc="Bölgü planı" />

                <Servicesjobstep desc1="Məkanın beton elementlərini eləcə də havalandırma santexnika şaxtalarının yerlərini nəzərə alaraq müştərinin də istəklərinə uyğun " />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Servicesjobstep title="03" />

                <Servicesjobstep desc="Mebel həlli planı" />

                <Servicesjobstep desc1="Bərpa planından sonra yenilənmiş layihənin otaq bölgülərinə əsasən müştərinin istəyi ilə birgə müəyyən standartları da nəzərə alaraq mebel yerləşiminin işlənməsi." />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Servicesjobstep title="04" />

                <Servicesjobstep desc="Elektrik və santexnika təchizatı planı" />

                <Servicesjobstep desc1="Mebel həlli planı hazır olduqdan sonra yerləşimə əsasən elektrik və santexnika ölçülərinin işlənib hazırlanması." />
              </Col>
            </Row>
            <Row>
              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Servicesjobstep title="05" />

                <Servicesjobstep desc="Məkanın dizayn və vizualizasiyası" />

                <Servicesjobstep desc1="Yerləşim və mebel həlli planı hazır olduqdan sonra müştərinin də müəyyən istəkləri nəzərə alınaraq düzgün üslub seçimi ilə məkanın 3D, vizualizasiya işlərinin görülməsi." />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Servicesjobstep title="06" />

                <Servicesjobstep desc="Tavan ölçüləri" />

                <Servicesjobstep desc1="Təsdiq olunmuş dizayna əsasən tavan alçıpan və elektrik ölçü xətlərinin düzgün işlənməsi. " />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Servicesjobstep title="07" />

                <Servicesjobstep desc="Kosmetik işlərin görülməsi" />

                <Servicesjobstep desc1="Dizaynda istifadə olunmuş bütün materialların ölçülərinin çıxarılması və matrial alımı üçün bütün məlumatların hazırlanması" />
              </Col>

              <Col className="mt-5" xs={12} sm={3} lg={3} xl={3}>
                <Servicesjobstep title="08" />

                <Servicesjobstep desc="Dekor və mebel" />

                <Servicesjobstep desc1="Dizaynda istifadə olunan bütün dekor və mebellərin ölçülərinin düzgün çıxarılması və müştərinin sifarişi üçün mebel dükanına göndərilməsi." />
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </div>
    </>
  );
};

export default Services;
