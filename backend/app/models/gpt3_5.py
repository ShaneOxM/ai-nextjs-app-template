
import openai

def predict(input_text: str) -> str:
    response = openai.Completion.create(
        engine="gpt3_5",
        prompt=input_text,
        max_tokens=100
    )
    return response.choices[0].text.strip()
