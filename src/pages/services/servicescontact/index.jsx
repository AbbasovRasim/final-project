import { useState } from "react";
import styles from "./style.module.css";

import axios from "axios";
import toast from "react-hot-toast";
import { Container, Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
const ServicesContact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    Surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/contact`, formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Your email is being received!");
          setFormData({
            fullname: "",
            Surname: "",
            email: "",
            phone: "",
            message: "",
          });
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <section className={styles["section-wrapper "]}>
      <div
        className={`${styles["custom-container"]} ${styles["form-content"]}`}
      >
        <form onSubmit={handleFormSubmit}>
          <Container className=" py-5 px-5 ">
            <Row>
              <Col className="mt-3 w-50" xs={12} sm={6} lg={6} xl={6}>
                <input
                  className="p-2 rounded-2 border  w-100"
                  type="text"
                  name=""
                  value={formData.fullname}
                  placeholder="Adınız "
                  onChange={(e) => {
                    //   setFormData({ ...formData, fullname: e.target.value });
                    setFormData((prev) => {
                      return { ...prev, fullname: e.target.value };
                    });
                  }}
                />
              </Col>
              <Col className="mt-3 w-50" xs={12} sm={6} lg={6} xl={6}>
                <input
                  className="p-2 rounded-2 border  w-100"
                  type="text"
                  name=""
                  value={formData.Surname}
                  placeholder="Soyadiniz "
                  onChange={(e) => {
                    //   setFormData({ ...formData, fullname: e.target.value });
                    setFormData((prev) => {
                      return { ...prev, Surname: e.target.value };
                    });
                  }}
                />
              </Col>
              <Col className="mt-3 w-50" xs={12} sm={6} lg={6} xl={6}>
                <input
                  value={formData.email}
                  className="p-2 rounded-2 border w-100"
                  type="text"
                  name=""
                  placeholder="email"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, email: e.target.value };
                    });
                  }}
                />
              </Col>
              <Col className="mt-3 w-50" xs={12} sm={6} lg={6} xl={6}>
                <input
                  value={formData.phone}
                  className="p-2 rounded-2 border w-100"
                  type="text"
                  name=""
                  placeholder="Telefon nomresi"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, phone: e.target.value };
                    });
                  }}
                />
              </Col>
              <Col className="mt-3 w-100 " xs={12} sm={6} lg={6} xl={6}>
                <input
                  value={formData.message}
                  className="p-5 rounded-2 border w-100 h-100"
                  type="text"
                  name=""
                  placeholder="Layihəniz haqqında bizə məlumat verin"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, message: e.target.value };
                    });
                  }}
                />
              </Col>
            </Row>
          </Container>
          <div
            style={{ display: "flex", justifyContent: "right" }}
            className="btn text-right"
          >
            <button
              className="me-2
            my-3"
            >
              Göndər <CgArrowLongRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ServicesContact;
