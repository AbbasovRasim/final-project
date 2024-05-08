import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
function Servicecard(props) {
  const { id, title, desc, img } = props;

  return (
    // <Card>
    //   <Card.Img variant="top" src={img} />

    //   <Link to={`/portfolio/${id}`}>{title}</Link>
    // </Card>

    <>
      <h4>{title}</h4>
      <p> {desc}</p>
      <img src={img} alt="" />
      <Link to={`/services/${id}`}>
        <button> Daha etrafli</button>
      </Link>
    </>
  );
}
export default Servicecard;
