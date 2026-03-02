from pydantic import BaseModel, Field
from typing import Optional

class FoodItem(BaseModel):
    id: int
    name: str = Field(..., min_length=3)
    price: float = Field(..., gt=0)
    category: str
    is_available: bool = True

# new items add 

class UserCreate(BaseModel):
    name: str
    phone: str
    email: str
    password: str

class FoodIemCreate(BaseModel):
    name: str
    price: float
    category: str