import { useState } from "react";

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
    <section className="container">
      <form onSubmit={handleFormSubmit}>
        <div className={"row my-5"}>
          <div className={"col-6 d-flex  gap-3"}>
            <input
              className="p-2 rounded-2 border  w-60"
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
              className="p-2 rounded-2 border w-40"
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
          <div className={"col-6 d-flex gap-3"}>
            <button className="btn">
              <button className="me-2">Göndər</button>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default HomeContact;
