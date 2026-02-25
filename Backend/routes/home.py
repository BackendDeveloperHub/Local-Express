from fastapi import APIRouter
from schemas.home import HomeData

router = APIRouter(prefix="/home", tags=["home"])

@router.get("/", response_model=HomeData)
async def get_home():
    return {
        "message": {
            "title": "Welcome to Local Express",
            "description": "Your fast and reliable local delivery partner."
        },
        "features": ["Fast Delivery", "Real-time Tracking", "Secure Payments"]
    }
