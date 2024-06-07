"use client";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const products = [
  {
    name: "Jan",
    product1: 4800,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2200,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
  {
    name: "Jul",
    product1: 1000,
    product2: 2000,
  },
  {
    name: "Sep",
    product1: 2890,
    product2: 1890,
  },
];

export const Linedata = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={products} margin={{right: 20}}>
        <YAxis/>
        <XAxis dataKey="name"/>
        <CartesianGrid/>
        <Tooltip/>
        <Legend/>
        <Area
          type="monotone"
          dataKey="product1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b4cf7"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
