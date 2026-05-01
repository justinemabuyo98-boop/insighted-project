import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load dataset
df = pd.read_csv("data/classroom_shortage_exam_data.csv")

@app.get("/")
def home():
    return {"message": "InsightEd API is running"}

# 1. Shortage by Region
@app.get("/shortage-by-region")
def shortage_by_region():
    result = df.groupby("region")["classroom_shortage"].sum().reset_index()
    return result.to_dict(orient="records")

# 2. Get regions
@app.get("/regions")
def get_regions():
    return sorted(df["region"].unique().tolist())

# 3. Division filter
@app.get("/division-by-region/{region}")
def division_by_region(region: str):
    filtered = df[df["region"] == region]
    result = filtered.groupby("division")["classroom_shortage"].sum().reset_index()
    return result.to_dict(orient="records")

# 4. Scatter data
@app.get("/enrollment-vs-shortage")
def scatter():
    return df[["school_name", "total_enrollment", "classroom_shortage"]].to_dict(orient="records")

# For deployment
port = int(os.environ.get("PORT", 10000))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=port)