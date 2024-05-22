// import { NavLink } from "react-router-dom";
// import styles from "./style.module.css";
// const index = () => {
//   return (
//     <footer className={styles.header}>
//       <div className="container ">
//         <div className={styles.header_wrapper}>
//           <div className={styles.header_wrapper}>
//             <nav>
//               <NavLink
//                 className={({ isActive }) => (isActive ? styles.active : "")}
//                 to="/"
//               >
//                 Əsas səhifə
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? styles.active : "")}
//                 to="/portfolio"
//               >
//                 Portfolio
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? styles.active : "")}
//                 to="/services"
//               >
//                 Xidmətlər
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? styles.active : "")}
//                 to="/contact"
//               >
//                 Əlaqə
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? styles.active : "")}
//                 to="/about"
//               >
//                 Haqqımızda
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? styles.active : "")}
//                 to="/amazing"
//               >
//                 Tİ-Amazing Academy
//               </NavLink>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default index;
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareBehance } from "react-icons/fa6";

const index = () => {
  return (
    <header className={styles.header}>
      <div className="container ">
        <div className={styles.header_wrapper}>
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
            </nav>
          </div>
        </div>
      </div>

      <Container>
        <div className="border mt-3"></div>
        <div className=" mm my-3">
          <p style={{ color: "white" }}> +994 55 867 62 07 </p>

          <p style={{ color: "white" }}> +994 55 867 62 07 </p>

          <p style={{ color: "white" }}>ti_amazing@mail.ru</p>

          <p style={{ color: "white" }}>Baku şəh., Cavadxan 14 </p>
        </div>

        <div className="md pb-3">
          <BsInstagram />

          <BsWhatsapp />
          <LuFacebook />
          <SlSocialLinkedin />
          <FaSquareBehance />
        </div>
      </Container>
    </header>
  );
};

export default index;
