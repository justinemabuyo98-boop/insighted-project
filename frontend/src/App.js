import React from "react";
import RegionChart from "./components/RegionChart";
import DivisionChart from "./components/DivisionChart";
import ScatterPlot from "./components/ScatterChart";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>InsightEd Dashboard</h1>

      <h2>Shortage by Region</h2>
      <RegionChart />

      <h2>Division Deep Dive</h2>
      <DivisionChart />

      <h2>Enrollment vs Shortage</h2>
      <ScatterPlot />
    </div>
  );
}

export default App;