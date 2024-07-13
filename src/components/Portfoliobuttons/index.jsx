import axios from "axios";

import PortfolioallCards from "../../components/PortfolioallCards";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

const URL = "http://localhost:3004/PortfolioallCards";
const Portfoliobuttons = () => {
  const [portfolioallCards, setPortfolioallCards] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
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
