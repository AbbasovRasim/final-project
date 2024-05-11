import PageContainer from "../../components/PageContainer";
import "./notfound.css";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <>
      <div className="Notfound">
        <PageContainer>
          <div className="container">
            <img src="header/photo16.png" alt="" />

            <h2 style={{ textAlign: "center", color: "white" }}>
              Bağışlayın
              <br /> Səhifə tapılmadı
            </h2>

            <Link to="/">
              <div className="notfoundbutton my-5">
                <button>Əsas səhifə</button>
              </div>
            </Link>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default Notfound;
