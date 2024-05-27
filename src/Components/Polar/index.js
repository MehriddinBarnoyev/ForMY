import React, { useRef } from "react";
import { PolarArea, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import "chart.js/auto";

export default function PolarChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        id: "1",
        label: "Sales",
        data: [10, 16, 8, 5, 14],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
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
      <p className="h5">Polar Area Chart</p>
      <div className="col">
        <PolarArea
          ref={chartRef}  
          data={data}
          onClick={clicked}
        />
      </div>
    </div>
  );
}
