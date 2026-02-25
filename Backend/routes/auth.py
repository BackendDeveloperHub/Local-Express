from fastapi import APIRouter, HTTPException, Depends
from schemas.auth import LoginRequest, LoginResponse, LogoutResponse

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    # Dummy login logic
    if request.username == "admin" and request.password == "admin123":
        return {
            "message": "Login successful",
            "access_token": "dummy-token",
            "token_type": "bearer",
            "is_logged_in": True
        }
    raise HTTPException(status_code=401, detail="Invalid credentials")

@router.post("/logout", response_model=LogoutResponse)
async def logout():
    return {
        "message": "Logged out successfully",
        "is_logged_in": False
    }
