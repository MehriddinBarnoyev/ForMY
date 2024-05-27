import React, { useRef } from "react";
import { Line, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import "chart.js/auto";

export default function Chart01() {
  const chartRef = useRef(null);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        id: "1",
        label: "Sales",
        data: [20, 35, 75, 50, 40, 45],
        backgroundColor: "#fd9878",
      },
      {
        id: "2",
        label: "Leads",
        data: [40, 80, 55, 45, 65, 70],
        backgroundColor: "#9AD0F5",
      },
    ],
  };

  const printDatasetEvent = (dataset) => {
    if (!dataset.length) return;
    const datasetIndex = dataset[0].datasetIndex;
    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;
    const { datasetIndex, index } = element[0];
    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;
    console.log(elements.length);
  };

  const clicked = (event) => {
    const chart = chartRef.current;

    if (!chart) return;
    printDatasetEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };

  return (
    <div className="mt-5">
      <p className="h5">Line Chart</p>
      <div className="col">
        <Line
          ref={chartRef}
          datasetIdKey="id"
          data={data}
          onClick={clicked}
        />
      </div>
    </div>
  );
}
