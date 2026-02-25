from pydantic import BaseModel
from typing import Optional

class LoginRequest(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    message: str
    access_token: Optional[str] = None
    token_type: Optional[str] = None
    is_logged_in: bool

class LogoutResponse(BaseModel):
    message: str
    is_logged_in: bool
