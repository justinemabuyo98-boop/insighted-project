import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const API = "http://localhost:8000";

function DivisionChart() {
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/regions`)
      .then(res => {
        setRegions(res.data);
        setRegion(res.data[0]);
      });
  }, []);

  useEffect(() => {
    if (region) {
      axios.get(`${API}/division-by-region/${region}`)
        .then(res => setData(res.data));
    }
  }, [region]);

  return (
    <div>
      <select onChange={(e) => setRegion(e.target.value)} value={region}>
        {regions.map(r => <option key={r}>{r}</option>)}
      </select>

      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="division" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="classroom_shortage" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default DivisionChart;