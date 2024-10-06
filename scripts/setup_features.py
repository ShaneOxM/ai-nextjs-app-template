import os
import json

def create_model(model_name, model_type):
    model_path = f'backend/app/models/{model_name}.py'
    
    if model_type == "openai":
        content = f"""
import openai

def predict(input_text: str) -> str:
    response = openai.Completion.create(
        engine="{model_name}",
        prompt=input_text,
        max_tokens=100
    )
    return response.choices[0].text.strip()
"""
    elif model_type == "anthropic":
        content = f"""
import anthropic

def predict(input_text: str) -> str:
    client = anthropic.Client(os.environ["ANTHROPIC_API_KEY"])
    response = client.completion(
        model="{model_name}",
        prompt=input_text,
        max_tokens_to_sample=100
    )
    return response.completion
"""
    elif model_type == "custom":
        content = f"""
from .gpt3_5 import predict as gpt3_5_predict
from .claude3_5 import predict as claude3_5_predict

def predict(input_text: str) -> str:
    gpt_prediction = gpt3_5_predict(input_text)
    claude_prediction = claude3_5_predict(input_text)
    return f"GPT-3.5: {{gpt_prediction}}\nClaude-3.5: {{claude_prediction}}"
"""
    else:
        raise ValueError(f"Unsupported model type: {model_type}")

    with open(model_path, 'w') as f:
        f.write(content)

def create_route(route_name):
    route_path = f'backend/app/routes/{route_name}.py'
    with open(route_path, 'w') as f:
        f.write(f"""
from fastapi import APIRouter

router = APIRouter()

@router.get("/{route_name}")
async def {route_name}_endpoint():
    return {{"message": "{route_name.capitalize()} endpoint"}}
""")

def setup_features():
    with open('features.json', 'r') as f:
        features = json.load(f)
    
    for model in features.get('models', []):
        create_model(model['name'], model['type'])
    
    for route in features.get('routes', []):
        create_route(route)
    
    # Update .env file
    env_path = '.env'
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            env_contents = f.read()
        if 'AI_MODEL=' not in env_contents:
            with open(env_path, 'a') as f:
                f.write(f"\nAI_MODEL={features['default_model']}\n")
    else:
        with open(env_path, 'w') as f:
            f.write(f"AI_MODEL={features['default_model']}\n")

if __name__ == "__main__":
    setup_features()