import PageContainer from "../../components/PageContainer";
import HomeGalery from "./Galery";
import "./home.css";
import Homeimg from "../../components/homeimg";
import { Container, Col, Row } from "react-bootstrap";
import Hometitle from "../../components/Hometitle";
import Homejobstep from "../../components/homejobstep";
import HomeContact from "./contact";
import { CgArrowLongRight } from "react-icons/cg";

import HomeGalery2 from "./Galery2";
const Home = () => {
  return (
    <>
      <div className="backgroundhome">
        <PageContainer>
          <div className="container  ">
            <HomeGalery />
          </div>
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "Baskerville",
              fontSize: "48px",
              fontWeight: "400",
              lineHeight: "50,48px",
            }}
          >
            Xidmətlərimiz
          </h1>
          <div>
            <Container>
              <Row>
                <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                  <Homeimg img="./header/photo11.png" />
                </Col>
                <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                  <div
                    style={{
                      fontFamily: "Baskerville",
                      fontSize: "48px",
                      fontWeight: "400",
                      lineHeight: "50,48px",
                    }}
                  >
                    <Hometitle title="İnteryer dizayn" />
                  </div>

                  <p
                    style={{
                      fontFamily: "San Francisco",
                      fontSize: "18px",
                      fontWeight: "200",
                      lineHeight: "32,49px",
                    }}
                  >
                    <Hometitle desc="Hər bir məkanın daxili dizaynının ayrılmaz hissəsi gözəllik və funksionallıqdırsa orada istifadə olunan aksesuar, dekor, işıq sistemi isə o dizayna fərqlilik verməsi, yadda qalan etməsidir." />
                  </p>
                  <button>
                    Daha ətraflı <CgArrowLongRight />
                  </button>
                </Col>
              </Row>
              <Row>
                <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                  <div
                    style={{
                      fontFamily: "Baskerville",
                      fontSize: "48px",
                      fontWeight: "400",
                      lineHeight: "50,48px",
                    }}
                  >
                    <Hometitle title="Eksteryer və Landşaft dizayn" />
                  </div>
                  <p
                    style={{
                      fontFamily: "San Francisco",
                      fontSize: "18px",
                      fontWeight: "200",
                      lineHeight: "32,49px",
                    }}
                  >
                    <Hometitle desc="Eksteryer dedikde ilk öncə ağıla gələn layihənin fasad görünüşüdür. Fasad dizaynında mütləq olaraq bina ölçüləri nəzərə alınmalıdır. Bu ölçülərə əsasən də üslub və bu üsluba uyğun materialı düzgün seçmək lazımdır." />
                  </p>

                  <button>
                    Daha ətraflı <CgArrowLongRight />
                  </button>
                </Col>
                <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                  <Homeimg img="./header/photo14.png" />
                </Col>
              </Row>

              <Row>
                <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                  <Homeimg img="./header/photo15.png" />
                </Col>
                <Col className="mt-5 " xs={12} sm={6} lg={6} xl={6}>
                  <div
                    style={{
                      fontFamily: "Baskerville",
                      fontSize: "48px",
                      fontWeight: "400",
                      lineHeight: "50,48px",
                    }}
                  >
                    <Hometitle title="Ticarət Obyektlərinin dizaynı" />
                  </div>
                  <p
                    style={{
                      fontFamily: "San Francisco",
                      fontSize: "18px",
                      fontWeight: "200",
                      lineHeight: "32,49px",
                    }}
                  >
                    <Hometitle desc="Hər bir məkanın daxili dizaynının ayrılmaz hissəsi gözəllik və funksionallıqdırsa orada istifadə olunan aksesuar, dekor, işıq sistemi isə o dizayna fərqlilik verməsi, yadda qalan etməsidir." />
                  </p>
                  <button className="button">
                    Daha ətraflı <CgArrowLongRight />
                  </button>
                </Col>
              </Row>
            </Container>

            <h1
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              İşimizin mərhələləri
            </h1>
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
          </div>

          <div className="container">
            <HomeGalery2 />
            <div
              style={{
                color: "white",
                textAlign: "center",

                fontFamily: "Baskerville",
                fontSize: "48px",
                fontWeight: "400",
                lineHeight: "50,48px",
              }}
            >
              Hər hansı bir sualınız var? <br />
              Online müraciət göndərin
            </div>
          </div>

          <HomeContact />
        </PageContainer>
      </div>
    </>
  );
};

export default Home;
