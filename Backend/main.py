from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import auth, home, delivery, orders, profile, user

app = FastAPI(title='Local Express Delivery App')

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router)
app.include_router(home.router)
app.include_router(delivery.router)
app.include_router(orders.router)
app.include_router(profile.router)
app.include_router(user.router)

@app.get("/")
def read_root():
    return {
        "message": "Welcome to Local Express API",
        "version": "1.0.0",
        "docs": "/docs"
    }