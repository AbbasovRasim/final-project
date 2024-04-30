import Card from "react-bootstrap/Card";

function HomeSwiper(props) {
  const { img } = props;

  return (
    <Card>
      <Card.Img src={img} />
    </Card>
  );
}
export default HomeSwiper;
