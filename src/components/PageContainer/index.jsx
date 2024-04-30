import Header from "../Header";
import Footer from "../Footer";

const index = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default index;
