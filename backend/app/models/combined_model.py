from .gpt3_5 import predict as gpt3_5_predict
from .claude3_5 import predict as claude3_5_predict

def predict(input_text: str) -> str:
    gpt_prediction = gpt3_5_predict(input_text)
    claude_prediction = claude3_5_predict(input_text)
    return f"GPT-3.5: {gpt_prediction}\nClaude-3.5: {claude_prediction}"
