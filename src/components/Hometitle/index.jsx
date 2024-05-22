import "./hometitle.css";
function Hometitle(props) {
  const { title, desc } = props;
  return (
 HEAD
    <div>
      <h4 className="home-card-header"> {title} </h4>
      <p className="home-card-text"> {desc}</p>
    </div>

    <p className="hometitle">
      {title}
      {desc}
    </p>
 
}
export default Hometitle;
