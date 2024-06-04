import { Link } from "react-router-dom";
import "./Portfoliocard.css";
function Portfoliocard(props) {
  const { id, img, title } = props;

  return (
    <>
      <img src={img} alt="" />

      <div style={{ textAlign: "center" }}>
        <Link
          className="HOVER"
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
