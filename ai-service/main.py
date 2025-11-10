from fastapi import FastAPI
from pydantic import BaseModel
import openai

app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str

@app.post("/ai/text")
def ai_text(request: PromptRequest):
    # Placeholder for OpenAI API call
    return {"response": f"AI response to: {request.prompt}"}

@app.get("/")
def root():
    return {"message": "AI Service is running"}
