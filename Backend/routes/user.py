from fastapi import APIRouter, HTTPException
from schemas.user import UserCreate

router = APIRouter(prefix="/users", tags=["users"])

mdb = []

@router.get("/")
async def get_all_user():
    return mdb

@router.post("/register")
async def register_user(user: UserCreate):
    new_user = {"id": len(mdb) + 1, **user.model_dump(), "is_active": True}
    # Check if user already exists (simplified for now)
    for existing_user in mdb:
        if existing_user["email"] == user.email:
            raise HTTPException(status_code=400, detail="User already registered")
    
    mdb.append(new_user)
    return {"message": "User registered successfully", "user": new_user}