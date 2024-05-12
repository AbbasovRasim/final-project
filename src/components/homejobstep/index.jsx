import "./homejobstep.css";

function Homejobstep(props) {
  const { title, desc } = props;
  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          fontSize: "San Francisco",
          FontWeight: "400",
          FontSize: "36px",
          LineHeight: "42.96px",
          Width: "38px",
          Height: "43px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontFamily: "San Francisco",
          FontWeight: "400",
          FontSize: "36px",
          LineHeight: "42.96px",
          Width: "38px",
          Height: "43px",
        }}
      >
        {" "}
        {desc}
      </div>
    </div>
  );
}
export default Homejobstep;
