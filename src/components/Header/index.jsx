import { NavLink, Link } from "react-router-dom";
import styles from "./style.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "./header.css";

const index = () => {
  const [isOpen, setOpen] = useState();
  return (
    <header className={styles.header}>
      <div className="container  ">
        <div className={styles.header_wrapper}>
          <div>
            <Link className="LINK">
              <img src="/header/photo2.png" alt="" />
            </Link>
          </div>

          <div className={styles.header_wrapper}>
            <div className={`navheader ${isOpen ? "active" : ""}`}>
              <nav className="navbar">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  to="/"
                >
                  Əsas səhifə
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  to="/services"
                >
                  Xidmətlər
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  to="/contact"
                >
                  Əlaqə
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  to="/about"
                >
                  Haqqımızda
                </NavLink>

                {/* <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  to="/amazing"
                >
                  Tİ-Amazing Academy
                </NavLink> */}

                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                  to="/notfound"
                ></NavLink>

                <Link style={{ color: "white" }}>AZ</Link>
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
            <button
              className="mobile-menu-btn"
              onClick={() => setOpen(!isOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
