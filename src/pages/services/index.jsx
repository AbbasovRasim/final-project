import PageContainer from "../../components/PageContainer";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
import { useEffect, useState } from "react";
import Servicecard from "../../components/Servicecard";

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
      <PageContainer>
        <h1 style={{}}>Xidmətlərimiz</h1>
        <Container>
          <Row>
            {services.map((obj) => {
              return (
                <Col key={obj.id} className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                  <Servicecard id={obj.id} title={obj.title} desc={obj.desc} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </PageContainer>
    </>
  );
};

export default Services;
