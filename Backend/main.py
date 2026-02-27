from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user

app = FastAPI(title='local delivery app')

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router)

@app.get("/")
def read_root():
    return {"message": "wellcom my heartiya"}