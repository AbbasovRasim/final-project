import "./hometitle.css";
function Hometitle(props) {
  const { title, desc } = props;
  return (
    <>
      <h4 className="home-card-header"> {title} </h4>
      <p className="home-card-text"> {desc}</p>
    </>
  );
}
export default Hometitle;
