import { Link } from "react-router-dom";
import styles from "./style.module.css";

function PortfolioallCards(props) {
  const { id, button } = props;

  return (
    <>
      <Link
        className={`${styles["custom-container"]} ${styles["form-content"]}   `}
        to={`/portfolio?category=${button}`}
      >
        <button className="w-100 bg-transparent border">{button}</button>
      </Link>
    </>
  );
}

export default PortfolioallCards;
