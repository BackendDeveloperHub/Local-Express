from fastapi import APIRouter, HTTPException, Depends, status
from schemas.auth import LoginRequest, LoginResponse, LogoutResponse
from core.security import create_access_token, verify_password
from database import users_db

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    user = users_db.get(request.username)

    if not user or not verify_password(request.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )

    token = create_access_token(data={"sub": request.username})

    return {
        "message": "Login successful",
        "access_token": token,
        "token_type": "bearer",
        "is_logged_in": True
    }


@router.post("/logout", response_model=LogoutResponse)
async def logout():
    return {
        "message": "Logged out successfully",
        "is_logged_in": False
    }
