import PageContainer from "../../components/PageContainer";
import "./notfound.css";
import { CgArrowLongRight } from "react-icons/cg";

import styles from "./style.module.css";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <>
      <div className="Notfound">
        <PageContainer>
          <div className="container">
            <img src="header/photo16.png" alt="" />

            <h2 className="NotFoundheader">
              Bağışlayın
              <br /> Səhifə tapılmadı
            </h2>

            <Link
              className={`${styles["custom-container"]} ${styles["form-content"]}`}
              to="/"
            >
              <div className="notfoundbutton my-5">
                <button>
                  Əsas səhifə <CgArrowLongRight />
                </button>
              </div>
            </Link>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default Notfound;
