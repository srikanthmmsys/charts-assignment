function AreaChartCustomTooltip({ active, payload, label }) {
  function getLabel(label) {
    if (label === "Feb") {
      return <p>{`${label}1-${label}28,2022`}</p>;
    } else if (
      label === "Jan" ||
      label === "Mar" ||
      label === "May" ||
      label === "Jul"
    ) {
      return <p>{`${label}1-${label}31,2022`}</p>;
    } else if (label === "Apr" || label === "June") {
      return <p>{`${label}1-${label}30,2022`}</p>;
    } else return null;
  }
  if (active) {
    return (
      <div className="tooltip-background">
        <h4>{getLabel(label)}</h4>
        <p className="d-flex justify-between">
          Issue Open :{" "}
          <span>
            {payload[0].payload["Issue Open"][1] -
              payload[0].payload["Issue Open"][0]}
            D
          </span>
        </p>
        <p className="d-flex justify-between">
          Issue Start :{" "}
          <span>
            {payload[1].payload["Issue Start"][1] -
              payload[1].payload["Issue Start"][0]}
            D
          </span>
        </p>
        <p className="d-flex justify-between">
          Issue Completed :
          <span>
            {" "}
            {payload[2].payload["Issue Completed"][0] +
              payload[2].payload["Issue Completed"][1]}
            D
          </span>
        </p>
      </div>
    );
  }
}
export default AreaChartCustomTooltip;
