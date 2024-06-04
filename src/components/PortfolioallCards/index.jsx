import { Link } from "react-router-dom";
import styles from "./style.module.css";

function PortfolioallCards(props) {
  const { id, button } = props;

  return (
    <>
      <Link
        className={`${styles["custom-container"]} ${styles["form-content"]}   `}
        to={`/portfolioallCards/${id}`}
      >
        <button className="  w-25 w-25 bg-transparent border">{button}</button>
      </Link>
    </>
  );
}

export default PortfolioallCards;
