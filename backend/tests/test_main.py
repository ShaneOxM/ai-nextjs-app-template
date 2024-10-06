from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello from AI-powered backend!"}

def test_predict():
    response = client.post("/api/predict", json={"input": "test input"})
    assert response.status_code == 200
    assert "prediction" in response.json()
    assert "test input" in response.json()["prediction"]

def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}