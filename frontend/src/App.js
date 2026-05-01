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
    padding: "20px 10px", // Reduced padding for mobile
    boxSizing: "border-box" // Ensures padding doesn't break width
  };

  const sectionStyle = {
    width: "100%",
    maxWidth: "900px", // Limits width on Desktop
    marginBottom: "30px",
    padding: "15px", // Slightly smaller padding for mobile
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    backgroundColor: colors.lightGray,
    borderTop: `5px solid ${colors.depedBlue}`,
    boxSizing: "border-box"
  };

  const insightStyle = {
    backgroundColor: "#fff",
    borderLeft: `5px solid ${colors.depedRed}`,
    padding: "12px",
    marginTop: "15px",
    textAlign: "left",
    fontSize: "0.9rem", // Slightly smaller for better mobile fit
    lineHeight: "1.4"
  };

  const headerStyle = {
    marginBottom: "30px",
    width: "100%",
    padding: "0 10px"
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <header style={headerStyle}>
        {/* Responsive Font Size for Title */}
        <h1 style={{ 
          color: colors.depedBlue, 
          fontSize: "clamp(1.5rem, 8vw, 2.5rem)", 
          marginBottom: "10px" 
        }}>
          InsightEd Dashboard
        </h1>
        <div style={{ width: "60px", height: "4px", backgroundColor: colors.depedRed, margin: "0 auto" }}></div>
        <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "0.95rem" }}>
          National Classroom Shortage Analysis
        </p>
      </header>

      {/* Chart 1: Region */}
      <div style={sectionStyle}>
        <h2 style={{ color: colors.depedBlue, fontSize: "1.2rem" }}>Regional Distribution</h2>
        {/* Wrapper to ensure chart doesn't overflow */}
        <div style={{ width: "100%", overflowX: "hidden" }}>
          <RegionChart />
        </div>
        <div style={insightStyle}>
          <strong>💡 Insight:</strong> Regions in red represent critical shortage levels. 
          Budget priority should be skewed towards these areas.
        </div>
      </div>

      {/* Chart 2: Division */}
      <div style={sectionStyle}>
        <h2 style={{ color: colors.depedBlue, fontSize: "1.2rem" }}>Division-Level Deep Dive</h2>
        <div style={{ width: "100%", overflowX: "hidden" }}>
          <DivisionChart />
        </div>
        <div style={insightStyle}>
          <strong>📊 Trend:</strong> Specific divisions carry 80% of the shortage burden. 
          Granular allocation is required.
        </div>
      </div>

      {/* Chart 3: Scatter */}
      <div style={sectionStyle}>
        <h2 style={{ color: colors.depedBlue, fontSize: "1.2rem" }}>Enrollment vs Shortage</h2>
        <div style={{ width: "100%", overflowX: "hidden" }}>
          <ScatterPlot />
        </div>
        <div style={insightStyle}>
          <strong>🎯 Strategy:</strong> High-density points indicate schools that are over-capacity.
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "20px", borderTop: "1px solid #ddd", width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
        <p style={{ color: 'gray', fontStyle: 'italic', fontSize: "0.9rem" }}>Created by: Justine F. Mabuyo</p>
        <p style={{ fontSize: "0.75rem", color: "#999" }}>Data Source: Classroom Shortage Exam Data</p>
      </footer>
    </div>
  );
}

export default App;
