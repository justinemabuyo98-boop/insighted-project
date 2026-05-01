import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const API = "https://insighted-project.onrender.com";

function RegionChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/shortage-by-region`)
      .then(res => setData(res.data));
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="region" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="classroom_shortage" fill="#8884d8" />
    </BarChart>
  );
}

export default RegionChart;