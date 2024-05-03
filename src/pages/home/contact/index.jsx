import { useState } from "react";
import styles from "./style.module.css";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    fullname: "",

    phone: "",
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

            phone: "",
          });
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <section className={styles["section-wrapper"]}>
      <div
        className={`${styles["custom-container"]} ${styles["form-content"]}`}
      >
        <form onSubmit={handleFormSubmit}>
          <div className={"row my-5"}>
            <div className={"col-9 d-flex flex-column gap-3"}>
              <input
                className="p-2 rounded-2 border  w-100"
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
              <div className={"col-6 d-flex flex-column gap-3"}>
                <input
                  value={formData.phone}
                  className="p-2 rounded-2 border w-100"
                  type="text"
                  name=""
                  placeholder="Əlaqə nömrəsi"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, phone: e.target.value };
                    });
                  }}
                />
              </div>
            </div>

            <button className="btn">
              <span className="me-2">Göndər</span>

              <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
