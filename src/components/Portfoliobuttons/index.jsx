import axios from "axios";

import PortfolioallCards from "../../components/PortfolioallCards";
import { useEffect, useState } from "react";

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
    <>
      {portfolioallCards.map((obj) => {
        return (
          <PortfolioallCards key={obj.id} id={obj.id} button={obj.button} />
        );
      })}
    </>
  );
};
export default Portfoliobuttons;
