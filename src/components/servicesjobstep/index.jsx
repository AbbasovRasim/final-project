import "./servicesjobstep.css";
function Servicesjobstep(props) {
  const { title, desc, desc1 } = props;
  return (
    <>
      <h4 className="servicesjobstep-title"> {title} </h4>

      <p className="servicesjobstep-desc"> {desc}</p>
      <p className="servicesjobstep-desc1"> {desc1}</p>
    </>
  );
}
export default Servicesjobstep;
