"use client";
import { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { flights } from "@/lib/dummy_data";

export default function Chart() {
  const canvas = useRef(null);
  useEffect(() => {
    ChartJS.register(
      LineController,
      LineElement,
      PointElement,
      LinearScale,
      CategoryScale,
      Title,
      Tooltip,
      Filler
    );

    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");

      if (ChartJS.getChart(canvas.current)) {
        ChartJS.getChart(canvas.current).destroy();
      }

      new ChartJS(ctx, {
        type: "line",
        data: {
          labels: flights.map((flight) => flight.airline_name),
          datasets: [
            {
              label: "Dataset 1",
              data: flights.map((flight) =>
                parseFloat(flight.round_trip_price)
              ),
              borderColor: "#605dec",
              background:
                "linear-gradient(180deg, #A5A4F4 -0.44%, rgba(195, 194, 248, 0.328125) 44.03%, rgba(210, 209, 250, 0) 100%)",
              fill: "origin",
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              ticks: {
                color: "#6E7491",
                font: {
                  size: 12,
                },
              },
            },
          },
        },
      });
    }
  }, []);

  return <canvas ref={canvas} width="400" height="192"></canvas>;
}
