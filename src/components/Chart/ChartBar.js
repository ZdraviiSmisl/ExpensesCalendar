import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillhaigt = "0%";
  if (props.maxValue > 0)
    barFillhaigt = Math.round((props.value / props.maxValue) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ hight: barFillhaigt }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
