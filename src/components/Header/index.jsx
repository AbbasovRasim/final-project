import { NavLink, Link } from "react-router-dom";
import styles from "./style.module.css";
import { FcRight } from "react-icons/fc";
const index = () => {
  return (
    <header className={styles.header}>
      <div className="container ">
        <div className={styles.header_wrapper}>
          <div>
            <Link>
              <img src="./header/photo2.png" alt="" />
            </Link>
          </div>

          <div className={styles.header_wrapper}>
            <nav>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
              >
                Əsas səhifə
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/services"
              >
                Xidmətlər
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/contact"
              >
                Əlaqə
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/about"
              >
                Haqqımızda
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/amazing"
              >
                Tİ-Amazing Academy
              </NavLink>
              <p>AZ</p>

              <Link to="/contact">
                <button
                // style={{
                //   display: "flex",
                //   gap: "10px",
                // }}
                >
                  <p>Əlaqə</p>
                  {/* <img src="./header/photo12.png" alt="" /> */}
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
