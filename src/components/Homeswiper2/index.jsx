import Card from "react-bootstrap/Card";

function HomeSwiper2(props) {
  const { img } = props;

  return (
    <Card>
      <Card.Img src={img} />
    </Card>
  );
}
export default HomeSwiper2;
