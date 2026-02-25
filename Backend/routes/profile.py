from fastapi import APIRouter, HTTPException
from schemas.profile import UserProfile, ProfileUpdate
from database import profile_db

router = APIRouter(prefix="/profile", tags=["profile"])

@router.get("/", response_model=UserProfile)
async def get_profile():
    return profile_db

@router.put("/update", response_model=UserProfile)
async def update_profile(update_data: ProfileUpdate):
    if update_data.phone is not None:
        profile_db["phone"] = update_data.phone
    if update_data.address is not None:
        profile_db["address"] = update_data.address
    return profile_db
