import React from "react";
import { Bar } from "react-chartjs-2";
import "./chart.css"

const BarChart = () => {


  
  // Data for the bar chart
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Guest",
        data: [500, 350, 200, 400],
        backgroundColor: "#98D89E", // Red
      },
      {
        label: "User",
        data: [400, 450, 300, 350],
        backgroundColor: "#EE8484", // Blue
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    scales: {
        x: {
            beginAtZero: true,
            barPercentage: 0.1,
            barThickness: 20,
            },
      y: {
        beginAtZero: false, // Start the scale based on custom values
        suggestedMin: 0,    // Minimum value for the Y-axis
        suggestedMax: 500,   // Maximum value for the Y-axis// Start the scale at zero
        ticks: {
            stepSize: 100,    // Custom step size for Y-axis ticks
          },
    },
    },
    plugins: {
        legend: {
          position: 'top', // Align the legend to the top
          align: 'end', // Align legend items to the start (right)
          fullWidth: true, 
          labels: {
            // Use a custom point style for legend labels
            usePointStyle: true,
            // Custom point style properties
            pointStyle: 'circle', // You can use 'circle', 'rect', 'rectRot', etc.
            fontSize: 10, // Adjust the font size of the legend labels
          },
        
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0, // You can adjust this to control the space on the sides of the chart
        },
      },
      // Control the width of the canvas
    maintainAspectRatio: false, // Set this to false
    // plugins: {
    //   legend: {
    //     fullWidth: true, // Set this to true to occupy the full width
    //   },
    // },
      
      
    };

  return (
    <div className="bar-chart ">
      <h2>Activities</h2>
      <p>May - June 2021</p>
      <div className="chart">
          <Bar data={data} options={options} />
  
      </div>
      </div>
  );
};

export default BarChart;
