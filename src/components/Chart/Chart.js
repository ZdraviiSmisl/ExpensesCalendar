import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div>
      {props.dataPoings.map((dataPoint) => (
        //is this case label for each datapoint will be different,so it is used the label  instead id
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
