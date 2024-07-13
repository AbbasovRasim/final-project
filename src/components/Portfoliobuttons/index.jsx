import axios from "axios";

import PortfolioallCards from "../../components/PortfolioallCards";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

const url = `${import.meta.env.VITE_BASE_URL}/PortfolioallCards`;
const Portfoliobuttons = () => {
  const [portfolioallCards, setPortfolioallCards] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setPortfolioallCards(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Row className="justify-content-around">
      {portfolioallCards.map((obj) => (
        <PortfolioallCards key={obj.id} id={obj.id} button={obj.button} />
      ))}
    </Row>
  );
};
export default Portfoliobuttons;
