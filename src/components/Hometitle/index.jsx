import "./hometitle.css";
function Hometitle(props) {
  const { title, desc } = props;
  return (
    <p className="hometitle">
      {title}
      {desc}
    </p>
  );
}
export default Hometitle;
