import axios from "axios";

import PortfolioallCards from "../../components/PortfolioallCards";
import { useEffect, useState } from "react";

const URL = "http://localhost:3004/PortfolioallCards";
const Portfoliobuttons = () => {
  const [portfolioallCards, setPortfolioallCards] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setPortfolioallCards(res.data);
    });
  }, []);

  return (
    <>
      {portfolioallCards.map((obj) => {
        return (
          <div key={obj.id} className=" mb-5 ">
            <PortfolioallCards id={obj.id} button={obj.button} />
          </div>
        );
      })}
    </>
  );
};
export default Portfoliobuttons;
