import PageContainer from "../../components/PageContainer";
import HomeGalery from "./Galery";
import "./home.css";
import Homeimg from "../../components/homeimg";
import { Container, Col, Row } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <PageContainer>
        <div className="container">
          <HomeGalery />
        </div>

        <div>
          <Container>
            <Row>
              <Col xs={12} sm={6} lg={6} xl={6}>
                <Homeimg img="./header/photo11.png" />
              </Col>
            </Row>
          </Container>
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
