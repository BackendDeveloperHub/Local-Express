from pydantic import BaseModel
from typing import Optional

class UserProfile(BaseModel):
    username: str
    email: str
    phone: Optional[str] = None
    address: Optional[str] = None

class ProfileUpdate(BaseModel):
    phone: Optional[str] = None
    address: Optional[str] = None
