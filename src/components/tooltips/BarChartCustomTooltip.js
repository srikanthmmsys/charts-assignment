import React from "react";

function BarChartCustomTooltip({ active, payload, label }) {
  function getLabel(label) {
    if (label === "S1") {
      return <p>(1/Jan/2022 - 31/Jan/2022)</p>;
    } else if (label === "S2") {
      return <p>(1/Feb/2022 - 28/Feb/2022)</p>;
    } else if (label === "S3") {
      return <p>(1/Mar/2022 - 31/Mar/2022)</p>;
    } else if (label === "S4") {
      return <p>(1/Apr/2022 - 30/Apr/2022)</p>;
    } else if (label === "S5") {
      return <p>(1/May/2022 - 31/May/2022)</p>;
    } else if (label === "Foecast") {
      return <p>(1/Jun/2022 - 30/Jun/2022)</p>;
    } else return null;
  }
  if (active) {
    return (
      <div className="tooltip-background">
        <h5>{getLabel(label)}</h5>
        <p className="d-flex justify-between">
          SP Added :<span>{payload[0].payload["SP Added"]}</span>
        </p>
        <p className="d-flex justify-between">
          SP completed :<span>{payload[1].payload["SP completed"]}</span>
        </p>
        <p className="d-flex justify-between">
          SP Planed :<span>{payload[2].payload["SP Planed"]}</span>
        </p>
        <p className="d-flex justify-between">
          SP forecast :<span>{payload[2].payload["SP forecast"]}</span>
        </p>
      </div>
    );
  }
}

export default BarChartCustomTooltip;
