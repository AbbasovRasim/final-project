import { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import axios from "axios";
import toast from "react-hot-toast";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css";
const HomeContact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3004/contact`, formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Your email is being received!");
          setFormData({
            fullname: "",
            phone: "",
          });
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <Container className=" border my-5 py-5 px-5 ">
          <div className="   justify-content-around d-flex flex-lg-row flex-column ">
            <input
              className="p-2 rounded-2 border bg-transparent text-light w-30"
              type="text"
              name=""
              value={formData.fullname}
              placeholder="Adınız və Soyadınız"
              onChange={(e) => {
                //   setFormData({ ...formData, fullname: e.target.value });
                setFormData((prev) => {
                  return { ...prev, fullname: e.target.value };
                });
              }}
            />
            <input
              value={formData.phone}
              className="p-2 rounded-2 border bg-transparent text-light w-30"
              type="text"
              name=""
              placeholder="Əlaqə nömrəsi"
              onChange={(e) => {
                setFormData((prev) => {
                  return { ...prev, phone: e.target.value };
                });
              }}
            />

            <button
              className={` btn, ${styles["custom-container"]} ${styles["form-content"]}`}
            >
              <button>
                Göndər
                <CgArrowLongRight />
              </button>
            </button>
          </div>
        </Container>
      </form>
    </section>
  );
};

export default HomeContact;
