import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import Servicescontact from "../services/servicescontact";
import Aboutimages from "../../components/aboutimages";
const About = () => {
  return (
    <>
      <PageContainer>
        <div className="Aboutbackground">
          <h2 className="aboutheader hr-lines pt-5">Haqqımızda</h2>

          <Container>
            <Row className="about-alignItem">
              <Col className="mt-5 my-5" xs={12} sm={6} lg={6} xl={6}>
                <img src="header/photo18.png" alt="" />
              </Col>
              <Col className="mt-5 my-5 " xs={12} sm={6} lg={6} xl={6}>
                <p className="Abouttitle">
                  <p>
                    Toğrul İlyas Fəxrioğlu tərəfindən 2014-cü ildə təməli
                    qoyulan Tİ-AMAZİNG şirkətinin əsas məqsədlərindən biri bu
                    sahəyə həm dizayn layihələrində həm də təhsildə yeniliklər
                    gətirməkdir.
                  </p>
                  Dizayn, memarlıq layihələrimizdə daim yeniliklər edərək hər
                  zaman müştərilərin rəğbətini, inamını qazanmışıq. Ölkə daxili
                  və xarici layihələrdə məqsəd daim müştərilərin rahatlığını,
                  məmnuniyyətini göz önündə tutmaqdır. Hər mövsümdə rəng
                  çalarlarının, mebel üslublarının, divar kağızlarının,
                  aksesuarlarının deyişkənliyini müştəriyə çatdırmaq və
                  funksionallığı da əsas tutaraq layihələri bu yöndə
                  reallaşdırmaq bizim mütləq iş prinsipimiz olmuşdur.
                </p>
              </Col>
              <p className="Abouttitle">
                Dizayn sahəsi bir sənətdir və bu sənət nəzəriyyə ilə yanaşı
                təcrübəni də öz bərabərində tələb edir. Təhsil sistemində də biz
                bunu yaratdıq. Tələbələrə bu sənətin sirlərini sadəcə proqramlar
                ilə deyil, eləcə də tikintikərdə, inşaatlarda təcrübə keçərək
                aşıladıq. Biz tələbəyə dizayn şirkətlərində aylarla işləyib
                yığma ehtimalı az olan təcrübəni çox qısa zaman ərzində praktiki
                dərslərlə veririk. Təcrübə onu göstərir ki, bu sistem illerdir
                özünü doğruldub və bunun nəticəsidir ki, tələbələrimiz istənilən
                dizayn studiyalarında bir neçə ay təcrübə keçmədən işə
                başlayıblar.
              </p>
              <h2 className="aboutheader">Komandamız</h2>

              <Aboutimages />

              <h2 className="aboutheader">
                Layihə sifariş etmək istəyirsiniz? Online müraciət göndərin
              </h2>
              <Row className=" align-items-strech my-3">
                <Col className="mt-3" xs={12} sm={6} lg={6} xl={6}>
                  <img
                    src="header/photo19.png"
                    className="h-100 object-fit-cover"
                    alt=""
                  />
                </Col>
                <Col className="mt-3" xs={12} sm={6} lg={6} xl={6}>
                  <Servicescontact />
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </PageContainer>
    </>
  );
};

export default About;
