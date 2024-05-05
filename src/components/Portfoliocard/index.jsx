import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
function Portfoliocard(props) {
  const { id, img, title } = props;

  return (
    <Card>
      <Card.Img variant="top" src={img} />

      <Card.Title>
        <Link to={`/portfolio/${id}`}>{title}</Link>
      </Card.Title>
    </Card>
  );
}
export default Portfoliocard;
