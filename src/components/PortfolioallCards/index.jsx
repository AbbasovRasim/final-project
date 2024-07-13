import { Link } from "react-router-dom";
import styles from "./style.module.css";

function PortfolioallCards(props) {
  const { id, button } = props;

  return (
    <>
      <Link
        className={`${styles["custom-container"]} ${styles["form-content"]} flex-xxl-grow-1 col-sm-6 col-md-4 col-xxl-2`}
        to={`/portfolio?category=${button}`}
      >
        <button className="h-auto p-1 w-100 m-2 bg-transparent border">
          {button}
        </button>
      </Link>
    </>
  );
}

export default PortfolioallCards;
