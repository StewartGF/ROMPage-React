import React from "react";
import { Line } from "react-chartjs-2";

export default function Grafico({ precios, fechaLabel }) {
  const data = {
    labels: fechaLabel, // aca van las fechas trimeadas
    datasets: [
      {
        label: "Global",
        data: precios,
        backgroundColor: "rgb(161,21,80)",
        borderColor: "rgb(39,41,61)",
        lineTension: 0.1,
        fill: true,
        stepped: true,
        liveJoin: "round",
        hoverRadius: 7,
        hitRadius: 16,
        hoverBorderWidth: 2,
        borderWidth: 2,
        radius: 3.5,
        pointHoverBackgroundColor: "rgb(243, 48, 131)"
      }
    ]
  };

  const options = {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return (
            tooltipItem.yLabel
              .toString()
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " Z"
          );
        }
      }
    },
    position: "relative",
    responsive: true,
    layout: {
      padding: {
        top: 8
      }
    },
    scales: {
      scaleLabel: {
        fontColor: "blue",
        lineHeight: 3
      },
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: "rgb(161,21,80)",
            zeroLineWidth: 2,
            drawBorder: false,
            drawTicks: false,
            offsetGridLines: false
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  };
  const fontCard = {
    background: "rgb(229, 229, 229)"
  };
  return (
    <div className="card-body" style={fontCard}>
      <Line options={options} data={data}></Line>
    </div>
  );
}
