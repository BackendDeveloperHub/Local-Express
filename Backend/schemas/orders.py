from pydantic import BaseModel
from typing import List, Optional

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
