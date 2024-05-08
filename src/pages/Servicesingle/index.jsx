// import PageContainer from "../../components/PageContainer";
// import { Container, Row, Col } from "react-bootstrap";
// import { useParams } from "react-router-dom";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Image } from "react-bootstrap";

// const Servicesingle = () => {
//   const param = useParams();
//   const [portfolioDetailsData, setPortfolioDetailsData] = useState({});

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_BASE_URL}/services/${param.pId}`)
//       .then((res) => {
//         setPortfolioDetailsData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [param.pId]);

//   return (
//     <>
//       <PageContainer>
//         <Container>
//           <h1 style={{ color: "white", textAlign: "center" }}>
//             {portfolioDetailsData.title1}
//           </h1>

//           <p style={{ color: "white", textAlign: "center" }}>
//             {portfolioDetailsData.desc}
//           </p>
//           <p style={{ color: "white", textAlign: "center" }}>
//             {portfolioDetailsData.desc}
//           </p>
//           <Row>
//             <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
//               <Image src={portfolioDetailsData.img1} />
//             </Col>
//             <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
//               <Image src={portfolioDetailsData.img2} />
//             </Col>
//             <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
//               <Image src={portfolioDetailsData.img3} />
//             </Col>
//           </Row>

//           <Row>
//             <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
//               <Image src={portfolioDetailsData.img4} />
//             </Col>
//             <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
//               <Image src={portfolioDetailsData.img5} />
//             </Col>
//             <Col className="mt-5" xs={12} sm={4} lg={4} xl={4}>
//               <Image src={portfolioDetailsData.img6} />
//             </Col>
//           </Row>
//         </Container>
//       </PageContainer>
//     </>
//   );
// };

// export default Servicesingle;
