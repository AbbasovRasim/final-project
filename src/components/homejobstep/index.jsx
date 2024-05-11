import "./homejobstep.css";

function Homejobstep(props) {
  const { title, desc } = props;
  return (
    <div style={{ color: "white" }}>
      <h4> {title} </h4>
      <p className="homejopstep"> {desc}</p>
    </div>
  );
}
export default Homejobstep;
