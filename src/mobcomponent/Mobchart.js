import FusionCharts from "fusioncharts";
import React from "react";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependency
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Contribution overtime",
    subcaption: "Starting year 2016",
    decimals: "1",
    theme: "gammel",
    numberSuffix: "k",
    paletteColors: "#3b82f6" // Set the color to blue (#3b82f6)
  },
  data: [
    {
      label: "20",
      value: "1466000"
    },
    {
      label: "25",
      value: "1147800"
    },
    {
      label: "30",
      value: "532200"
    },
    {
      label: "35",
      value: "395000"
    },
    {
      label: "40",
      value: "250200"
    },
    {
      label: "60",
      value: "224600"
    },
    {
      label: "65",
      value: "215200"
    },
  ]
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="column3d"
        width="90%"
        height="30%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default MyComponent;
