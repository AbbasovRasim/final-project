import { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import axios from "axios";
import toast from "react-hot-toast";
import { Container, Row, Col } from "react-bootstrap";

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
        <Container className=" border my-5 py-5">
          <Row>
            <Col className="mt-3 my-5" xs={12} sm={3} lg={3} xl={3}>
              <input
                className="p-2 rounded-2 border  w-30"
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
            </Col>
            <Col className="mt-3 " xs={12} sm={6} lg={6} xl={6}>
              <input
                value={formData.phone}
                className="p-2 rounded-2 border w-30"
                type="text"
                name=""
                placeholder="Əlaqə nömrəsi"
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, phone: e.target.value };
                  });
                }}
              />
            </Col>

            <Col className="mt-3 w-40" xs={12} sm={3} lg={3} xl={3}>
              <button className="btn ">
                <button>
                  Göndər
                  <CgArrowLongRight />
                </button>
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    </section>
  );
};

export default HomeContact;
