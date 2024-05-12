import "./hometitle.css";
function Hometitle(props) {
  const { title, desc } = props;
  return (
    <div className="hometitle">
      {title}
      {desc}
    </div>
  );
}
export default Hometitle;
