import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
const StatisticsPage = () => {
  const donations = useLoaderData();
  let totalDonations = donations.length;
  const donationsMoney = JSON.parse(localStorage.getItem("donationsMoney"));
  let yourDonationTotal = donationsMoney?.length || 0;
  const data = [
    { name: "Group A", value: totalDonations },
    { name: "Group B", value: yourDonationTotal },
  ];

  const COLORS = ["#FF444A", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <div className="container mx-auto mt-20 p-4 ">
        <div className="flex justify-center px-4 text-2xl font-bold">
          <PieChart width={800} height={600}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={250}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex justify-center pb-9">
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
          <div className="flex items-center space-x-8">
            <h2>Your Donation</h2>
            <div className="h-4 w-20  md:w-32 lg:w-80 bg-[#00C49F]"></div>
          </div>
          <div className="flex items-center space-x-8">
            <h2>Total Donation</h2>
            <div className="h-4 w-20  md:w-32 lg:w-80 bg-[#FF444A]"></div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsPage;
