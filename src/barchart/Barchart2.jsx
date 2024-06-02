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
      display: false,
      position: "right",
    },
    title: {
      display: false
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

const Barchart2 = () => {
  // let eventType = data.reduce(function (r, a) {
  //   r[a.event_type] = (r[a.event_type] || 0) + 1;
  //   return r;
  // }, {});
  const Event = NetworkData.reduce(function (r, a) {
    r[a.event_type] = (r[a.event_type] || 0) + 1;
    return r;
  }, {});

  const eventLabel = Object.keys(Event);
  const eventData = Object.values(Event);

  useEffect(() => {
    // console.log("Event", Event);
    // console.log('EventLabel', Event);
  });

  return (
    <div className="">
      <h3 className="text-2xl py-5 text-left">Events</h3>

      <div className="flex flex-row">
        <div className="basis-1/2">
        <Bar options={options} data={{labels: eventLabel, datasets: [
            {
              label: "Event",
              data: eventData,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            }
      ]}} />
        </div>
        </div>


    </div>
  );
};

export default Barchart2;
