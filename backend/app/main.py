from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
import importlib
import os

load_dotenv()

app = FastAPI()

class PredictionInput(BaseModel):
    input: str
    model: str = None  # Allow specifying the model in the request

class PredictionOutput(BaseModel):
    prediction: str

# Load all available models
available_models = {}
for model_file in os.listdir('app/models'):
    if model_file.endswith('.py'):
        model_name = model_file[:-3]
        model_module = importlib.import_module(f'app.models.{model_name}')
        available_models[model_name] = getattr(model_module, 'predict')

# Default model
DEFAULT_MODEL = os.getenv('AI_MODEL', 'default')

@app.post("/api/predict", response_model=PredictionOutput)
async def predict(input_data: PredictionInput):
    model = input_data.model or DEFAULT_MODEL
    if model not in available_models:
        raise HTTPException(status_code=400, detail=f"Model '{model}' not available")
    
    prediction = available_models[model](input_data.input)
    return {"prediction": prediction}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

# Dynamically load additional routes
for route_file in os.listdir('app/routes'):
    if route_file.endswith('.py'):
        route_module = importlib.import_module(f'app.routes.{route_file[:-3]}')
        if hasattr(route_module, 'router'):
            app.include_router(route_module.router)