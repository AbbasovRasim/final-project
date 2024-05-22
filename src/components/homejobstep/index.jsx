import "./homejobstep.css";
function Homejobstep(props) {
  const { title, desc, desc1 } = props;
  return (
    <>
      <h4 className="homejobstep-title"> {title} </h4>

      <p className="homejobstep-desc"> {desc}</p>
      <p className="homejobstep-desc1"> {desc1}</p>
    </>
  );
}
export default Homejobstep;
