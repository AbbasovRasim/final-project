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
              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
                <Homeimg img="./header/photo11.png" />
              </Col>

              <Col className="mt-5" xs={12} sm={6} lg={6} xl={6}>
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
