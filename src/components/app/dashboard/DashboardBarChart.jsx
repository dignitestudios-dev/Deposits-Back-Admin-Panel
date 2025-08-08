import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const years = [
  { label: "2022 - 2023", value: "2022-2023" },
  { label: "2023 - 2024", value: "2023-2024" },
  { label: "2024 - 2025", value: "2024-2025" },
];

const months = (count) => {
  const all = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return all.slice(0, count);
};

const getRandomNumbers = ({ count, min, max }) => {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const BarChart = () => {
  const [selectedYear, setSelectedYear] = useState(years[1].value); // default to 2023-2024
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const DATA_COUNT = 12;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 6 };

  const labels = months(DATA_COUNT);
  const values = getRandomNumbers(NUMBER_CFG);
  const maxValue = Math.max(...values); // 🔍 find max value
// const background = "linear-gradient"("180deg", "#003897 0%", "#0151DA 100%");
//   // 🎨 color each bar: darkest for the max, lighter for others
//   const backgroundColors = values.map((val) =>
//     val === maxValue ? background : "#B2D3F2"
//   );
  // Calculate average#003897
  // const average =
  //   values.reduce((sum, value) => sum + value, 0) / values.length;

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderRadius: 4,
        borderSkipped: false,
        backgroundColor: function(context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
  
          if (!chartArea) return;
  
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(1, "#003897");
          gradient.addColorStop(0, "#0151DA");
  
          return values[context.dataIndex] === maxValue ? gradient : "#B2D3F2";
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "",
      },
      tooltip: {
        enabled: false, // ❌ disables tooltip on hover
      },
    },
    hover: {
      mode: null, // ❌ disables hover interaction
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
        barPercentage: 0,
        categoryPercentage: 0,
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: 14 },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[420px] bg-white p-6 rounded-[8px]">
      <div className="w-full h-[60px] flex  justify-between  gap-5">
        <h1 className="text-[16px] font-[500] text-[#181818]">Monthly Revenue Generated</h1>
        <div className=" flex  justify-end">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 border border-[#E4E4E4] rounded-full w-[173px] px-3 py-2 bg-white text-[#181818] font-[00] text-[16px] focus:outline-none"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <FaRegCalendarAlt className="text-[#003897] text-[20px]" />
              <span>
                {years.find((y) => y.value === selectedYear)?.label}
              </span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-44 bg-white border border-[#E4E4E4] rounded-lg shadow-lg z-10">
                {years.map((year) => (
                  <li
                    key={year.value}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${selectedYear === year.value ? "font-bold text-[#003897]" : ""}`}
                    onClick={() => {
                      setSelectedYear(year.value);
                      setDropdownOpen(false);
                    }}
                  >
                    {year.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">  
        <p className="text-[12px] font-[600] text-[#181818]">Revenue <span className=" font-[400]">(In Thousands $)</span></p>
      <div className="  pt-2">
        <Bar data={data} options={options} className="!h-[300px] !w-[750px]"  />
      </div>
      </div>
    </div>
  );
};


export default BarChart;
