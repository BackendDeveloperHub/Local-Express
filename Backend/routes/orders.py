from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List
from core.dependencies import get_current_user
from database import db_orders

router = APIRouter(prefix="/orders", tags=["orders"])

class OrderItem(BaseModel):
    id: int
    name: str
    quantity: int
    price: float

class Order(BaseModel):
    id: int
    items: List[OrderItem]
    total_price: float
    status: str

class OrderList(BaseModel):
    orders: List[Order]

@router.get("/", response_model=OrderList)
async def get_orders(current_user: dict = Depends(get_current_user)):
    return {"orders": db_orders}
