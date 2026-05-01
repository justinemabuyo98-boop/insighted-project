import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip } from "recharts";

const API = "https://insighted-project.onrender.com";

function ScatterPlot() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/enrollment-vs-shortage`)
      .then(res => setData(res.data));
  }, []);

  return (
    <ScatterChart width={600} height={300}>
      <XAxis dataKey="total_enrollment" name="Enrollment" />
      <YAxis dataKey="classroom_shortage" name="Shortage" />
      <Tooltip />
      <Scatter data={data} fill="#ff7300" />
    </ScatterChart>
  );
}

export default ScatterPlot;