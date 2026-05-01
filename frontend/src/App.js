import React from "react";
import RegionChart from "./components/RegionChart";
import DivisionChart from "./components/DivisionChart";
import ScatterPlot from "./components/ScatterChart";

function App() {
  // DepEd Inspired Colors
  const colors = {
    depedBlue: "#0038A8",
    depedRed: "#D6001C",
    darkText: "#1a1a1a",
    lightGray: "#f4f4f4"
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: colors.darkText,
    padding: "40px 20px"
  };

  const sectionStyle = {
    width: "100%",
    maxWidth: "900px",
    marginBottom: "50px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    backgroundColor: colors.lightGray,
    borderTop: `5px solid ${colors.depedBlue}`
  };

  const insightStyle = {
    backgroundColor: "#fff",
    borderLeft: `5px solid ${colors.depedRed}`,
    padding: "15px",
    marginTop: "15px",
    textAlign: "left",
    fontSize: "0.95rem",
    lineHeight: "1.5"
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ color: colors.depedBlue, fontSize: "2.5rem", marginBottom: "10px" }}>
          InsightEd Dashboard
        </h1>
        <div style={{ width: "100px", height: "4px", backgroundColor: colors.depedRed, margin: "0 auto" }}></div>
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          National Classroom Shortage Analysis
        </p>
      </header>

      {/* Chart 1: Region */}
      <div style={sectionStyle}>
        <h2 style={{ color: colors.depedBlue }}>Regional Distribution</h2>
        <RegionChart />
        <div style={insightStyle}>
          <strong>💡 Actionable Insight:</strong> Regions with red bars represent critical shortage levels. 
          Budget priority should be skewed towards the top 3 regions shown here to maximize student impact.
        </div>
      </div>

      {/* Chart 2: Division */}
      <div style={sectionStyle}>
        <h2 style={{ color: colors.depedBlue }}>Division-Level Deep Dive</h2>
        <DivisionChart />
        <div style={insightStyle}>
          <strong>📊 Trend Analysis:</strong> While some regions look stable, specific divisions within them 
          carry 80% of the shortage burden. Granular allocation is required.
        </div>
      </div>

      {/* Chart 3: Scatter */}
      <div style={sectionStyle}>
        <h2 style={{ color: colors.depedBlue }}>Enrollment vs Shortage Correlation</h2>
        <ScatterPlot />
        <div style={insightStyle}>
          <strong>🎯 Strategic Recommendation:</strong> Points high on the Y-axis indicate schools that are 
          over-capacity. These areas require immediate infrastructure expansion or double-shifting.
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "40px", borderTop: "1px solid #ddd", width: "100%", paddingTop: "20px" }}>
        <p style={{ color: 'gray', fontStyle: 'italic' }}>Created by: Justine F Mabuyo</p>
        <p style={{ fontSize: "0.8rem", color: "#999" }}>Data Source: Classroom Shortage Exam Data</p>
      </footer>
    </div>
  );
}

export default App;
