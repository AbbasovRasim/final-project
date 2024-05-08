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
      </PageContainer>
    </>
  );
};

export default Services;
