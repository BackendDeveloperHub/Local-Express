from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Optional
from core.dependencies import get_current_user
from database import profile_db

router = APIRouter(prefix="/profile", tags=["profile"])

class UserProfile(BaseModel):
    username: str
    email: str
    phone: Optional[str] = None
    address: Optional[str] = None

class ProfileUpdate(BaseModel):
    phone: Optional[str] = None
    address: Optional[str] = None

@router.get("/", response_model=UserProfile)
async def get_profile(current_user: dict = Depends(get_current_user)):
    return profile_db

@router.put("/")
async def update_profile(update: ProfileUpdate, current_user: dict = Depends(get_current_user)):
    if update.phone:
        profile_db["phone"] = update.phone
    if update.address:
        profile_db["address"] = update.address
    return {"message": "Profile updated", "data": profile_db}
