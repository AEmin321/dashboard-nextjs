"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./chart.module.css";

const data = [
  {
    name: "Mon  ",
    visit: 4000,
    click: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    visit: 3000,
    click: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    visit: 2000,
    click: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    visit: 2780,
    click: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    visit: 1890,
    click: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    visit: 2390,
    click: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    visit: 3490,
    click: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              background: "#272727",
              border: "2px solid #383838",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="click" stroke="#00C58F" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
