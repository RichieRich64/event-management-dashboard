"use client";

import React from "react";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 630 },
  { month: "February", desktop: 970 },
  { month: "March", desktop: 790 },
  { month: "April", desktop: 410 },
  { month: "May", desktop: 1000 },
  { month: "June", desktop: 590 },
  { month: "July", desktop: 820 },
  { month: "August", desktop: 380 },
  { month: "September", desktop: 815 },
  { month: "October", desktop: 630 },
  { month: "November", desktop: 980 },
  { month: "December", desktop: 600 },
];

const chartConfig = {
  desktop: {
    label: "Events",
    color: "#8576FF",
  },
} satisfies ChartConfig;

const Chart = () => {
  return (
    <div className="border rounded p-2">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Chart;
