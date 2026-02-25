from fastapi import APIRouter
from schemas.orders import Order, OrderList, OrderItem
from typing import List
from database import db_orders

router = APIRouter(prefix="/orders", tags=["orders"])

@router.get("/", response_model=OrderList)
async def get_orders():
    return {"orders": db_orders}

@router.get("/{order_id}", response_model=Order)
async def get_order(order_id: int):
    for order in db_orders:
        if order["id"] == order_id:
            return order
    return None
