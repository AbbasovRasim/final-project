import "./hometitle.css";
function Hometitle(props) {
  const { title, desc } = props;
  return (
    <div className="hometitle">
      <h4> {title}</h4>
      {desc}
    </div>
  );
}
export default Hometitle;
