
import anthropic

def predict(input_text: str) -> str:
    client = anthropic.Client(os.environ["ANTHROPIC_API_KEY"])
    response = client.completion(
        model="claude3_5",
        prompt=input_text,
        max_tokens_to_sample=100
    )
    return response.completion
