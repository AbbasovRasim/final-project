import { NavLink, Link } from "react-router-dom";
import styles from "./style.module.css";

const index = () => {
  return (
    <header className={styles.header}>
      <div className="container ">
        <div className={styles.header_wrapper}>
          <div>
            <Link>
              <img src="/header/photo2.png" alt="" />
            </Link>
          </div>

          <div className={styles.header_wrapper}>
            <nav>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
              >
                Əsas səhifə
              </NavLink>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/services"
              >
                Xidmətlər
              </NavLink>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/contact"
              >
                Əlaqə
              </NavLink>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/about"
              >
                Haqqımızda
              </NavLink>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/amazing"
              >
                Tİ-Amazing Academy
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/notfound"
              ></NavLink>

              <Link
                className={`${styles["custom-container"]} ${styles["form-content"]}`}
                to="/contact"
              >
                <button>
                  <p>Əlaqə</p>
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
