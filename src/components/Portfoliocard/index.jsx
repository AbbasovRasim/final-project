import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
function Portfoliocard(props) {
  const { id, img, title } = props;

  return (
    // <Card>
    //   <Card.Img variant="top" src={img} />

    //   <Link to={`/portfolio/${id}`}>{title}</Link>
    // </Card>

    <>
      <img src={img} alt="" />
      <div style={{ textAlign: "center" }}>
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to={`/portfolio/${id}`}
        >
          {title}
        </Link>
      </div>
    </>
  );
}
export default Portfoliocard;
