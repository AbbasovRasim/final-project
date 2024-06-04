import PageContainer from "../../components/PageContainer";
import HomeGalery from "./Galery";
import "./home.css";
import Homeimg from "../../components/homeimg";
import { Container, Col, Row } from "react-bootstrap";
import Hometitle from "../../components/Hometitle";
import Homejobstep from "../../components/homejobstep";
import HomeContact from "./contact";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "./style.module.css";
import HomeGalery2 from "./Galery2";

const Home = () => {
  return (
    <>
      <div className="home">
        <PageContainer>
          <div className="container">
            <HomeGalery />
          </div>
          <h1 className="homeheader">Xidmətlərimiz</h1>

          <Container>
            <Row className="homecards">
              <Col
                className={`mt-5 p-0 service-card-left ${styles.image}`}
                xs={12}
                sm={6}
              >
                <Homeimg img="./header/photo11.png" />
              </Col>
              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                <Hometitle title="İnteryer dizayn" />

                <Hometitle desc="Hər bir məkanın daxili dizaynının ayrılmaz hissəsi gözəllik və funksionallıqdırsa orada istifadə olunan aksesuar, dekor, işıq sistemi isə o dizayna fərqlilik verməsi, yadda qalan etməsidir." />

                <button>
                  Daha ətraflı <CgArrowLongRight />
                </button>
              </Col>

              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                <Hometitle title="Eksteryer və Landşaft dizayn" />
                <Hometitle desc="Eksteryer dedikde ilk öncə ağıla gələn layihənin fasad görünüşüdür. Fasad dizaynında mütləq olaraq bina ölçüləri nəzərə alınmalıdır. Bu ölçülərə əsasən də üslub və bu üsluba uyğun materialı düzgün seçmək lazımdır." />
                <button>
                  Daha ətraflı <CgArrowLongRight />
                </button>
              </Col>
              <Col
                className={`mt-5 p-0 service-card-left ${styles.image}`}
                xs={12}
                sm={6}
              >
                <Homeimg img="./header/photo14.png" />
              </Col>

              <Col
                className={`mt-5 p-0 service-card-left ${styles.image}`}
                xs={12}
                sm={6}
              >
                <Homeimg img="./header/photo15.png" />
              </Col>
              <Col className="mt-5 " xs={12} sm={6} lg={6} xl={6}>
                <Hometitle title="Ticarət Obyektlərinin dizaynı" />

                <Hometitle desc="Hər bir məkanın daxili dizaynının ayrılmaz hissəsi gözəllik və funksionallıqdırsa orada istifadə olunan aksesuar, dekor, işıq sistemi isə o dizayna fərqlilik verməsi, yadda qalan etməsidir." />

                <button className="button">
                  Daha ətraflı <CgArrowLongRight />
                </button>
              </Col>
            </Row>
          </Container>

          <h1 className="homeheader">İşimizin mərhələləri</h1>
          <Container>
            <Row>
              <Col className="mt-5" xs={12} sm={6} lg={3} xl={3}>
                <Homejobstep title="01" />

                <Homejobstep desc="Ölçü Götürülməsi" />

                <Homejobstep desc1="Layihələrin mövcud vəziyyətinin mövcud vəziyyətinin ölçülərinin götürülməsi, qeydlərin aparılması" />
              </Col>

              <Col className="mt-5" xs={12} sm={6} lg={3} xl={3}>
                <Homejobstep title="02" />

                <Homejobstep desc="Bölgü planı" />

                <Homejobstep desc1="Məkanın beton elementlərini eləcə də havalandırma santexnika şaxtalarının yerlərini nəzərə alaraq müştərinin də istəklərinə uyğun " />
              </Col>

              <Col className="mt-5" xs={12} sm={6} lg={3} xl={3}>
                <Homejobstep title="03" />

                <Homejobstep desc="Mebel həlli planı" />

                <Homejobstep desc1="Bərpa planından sonra yenilənmiş layihənin otaq bölgülərinə əsasən müştərinin istəyi ilə birgə müəyyən standartları da nəzərə alaraq mebel yerləşiminin işlənməsi." />
              </Col>

              <Col className="mt-5" xs={12} sm={6} lg={3} xl={3}>
                <Homejobstep title="04" />

                <Homejobstep desc="Elektrik və santexnika təchizatı planı" />

                <Homejobstep desc1="Mebel həlli planı hazır olduqdan sonra yerləşimə əsasən elektrik və santexnika ölçülərinin işlənib hazırlanması." />
              </Col>
            </Row>

            <Row>
              <Col className="mt-5" xs={12} sm={6} lg={3} xl={3}>
                <Homejobstep title="05" />

                <Homejobstep desc="Məkanın dizayn və vizualizasiyası" />

                <Homejobstep desc1="Yerləşim və mebel həlli planı hazır olduqdan sonra müştərinin də müəyyən istəkləri nəzərə alınaraq düzgün üslub seçimi ilə məkanın 3D, vizualizasiya işlərinin görülməsi." />
              </Col>

              <Col className="mt-5" xs={12} sm={6} lg={3} xl={3}>
                <Homejobstep title="06" />

                <Homejobstep desc="Tavan ölçüləri" />

                <Homejobstep desc1="Təsdiq olunmuş dizayna əsasən tavan alçıpan və elektrik ölçü xətlərinin düzgün işlənməsi. " />
              </Col>

              <Col className="mt-5" xs={12} sm={6} lg={3} xl={3}>
                <Homejobstep title="07" />

                <Homejobstep desc="Kosmetik işlərin görülməsi" />

                <Homejobstep desc1="Dizaynda istifadə olunmuş bütün materialların ölçülərinin çıxarılması və matrial alımı üçün bütün məlumatların hazırlanması" />
              </Col>

              <Col className="mt-5" xs={12} sm={6} lg={3} xl={3}>
                <Homejobstep title="08" />

                <Homejobstep desc="Dekor və mebel" />

                <Homejobstep desc1="Dizaynda istifadə olunan bütün dekor və mebellərin ölçülərinin düzgün çıxarılması və müştərinin sifarişi üçün mebel dükanına göndərilməsi." />
              </Col>
            </Row>
          </Container>

          <div className="container">
            <HomeGalery2 />
            <p className="homeswipertitle">Lorem ipsum</p>

            <h1 className="homeheader">
              Hər hansı bir sualınız var? <br />
              Online müraciət göndərin{" "}
            </h1>
          </div>

          <HomeContact />
        </PageContainer>
      </div>
    </>
  );
};

export default Home;
