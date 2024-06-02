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
    },
    title: {
      display: false,
    },
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

const Barchart1 = () => {
  let dataLabels = [];
  let udpData = [];
  let tcpData = [];
  for (let i = 0; i < NetworkData.length; i++) {
    if (NetworkData[i].event_type == "alert") {
      if (!dataLabels.includes(NetworkData[i].alert.category)) {
        dataLabels.push(NetworkData[i].alert.category);
      }
      if (NetworkData[i].proto == "UDP") {
        let index = dataLabels.findIndex(
          (element) => element == NetworkData[i].alert.category
        );
        udpData[index] = udpData[index] ? udpData[index] + 1 : 1;
      }

      if (NetworkData[i].proto == "TCP") {
        let index = dataLabels.findIndex(
          (element) => element == NetworkData[i].alert.category
        );
        tcpData[index] = tcpData[index] ? tcpData[index] + 1 : 1;
      }
    }
  }

  console.log("udpData", udpData);
  console.log("tcpData", tcpData);
  console.log("dataLabels", dataLabels);

  useEffect(() => {});

  return (
    <>
      <h3 className="text-xl py-5 text-left">Event - Alert Categories</h3>
      <Bar
            options={options}
            data={{
              labels: dataLabels,
              datasets: [
                {
                  label: "TCP",
                  data: tcpData,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                  label: "UDP",
                  data: udpData,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
              ],
            }}
          />
    </>
  );
};

export default Barchart1;
