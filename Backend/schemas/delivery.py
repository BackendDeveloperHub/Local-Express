from pydantic import BaseModel
from typing import Optional

class DeliveryRequest(BaseModel):
    pickup_address: str
    delivery_address: str
    package_details: str
    contact_number: str

class DeliveryResponse(BaseModel):
    id: int
    status: str
    pickup_address: str
    delivery_address: str
    message: str
