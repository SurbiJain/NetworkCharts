import { NetworkData } from "../data";
import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    }
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Barchart3 = () => {
  
  const prototype = NetworkData.reduce(function (r, a) {
    r[a.proto] = (r[a.proto] || 0) + 1;
    return r;
  }, {});

  const protoLabel = Object.keys(prototype);
  const protoData = Object.values(prototype);

  useEffect(() => {
    console.log("proto", protoData);
    console.log('protoLabel', protoLabel);
  });

  return (
    <>
          <h3 className="text-xl py-5 text-left">Event - Alert Protocol</h3>
          <Bar options={options} data={{labels: protoLabel, datasets: [
            {
              label: "Protocol",
              data: protoData,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            }
      ]}} /></>
  );
};

export default Barchart3;
