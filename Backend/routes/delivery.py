import random
from fastapi import APIRouter
from schemas.delivery import DeliveryRequest, DeliveryResponse
from database import db_orders

router = APIRouter(prefix="/delivery", tags=["delivery"])

@router.post("/book", response_model=DeliveryResponse)
async def book_delivery(request: DeliveryRequest):
    new_id = random.randint(1000, 9999)
    
    # Create a new order object for the shared database
    new_order = {
        "id": new_id,
        "items": [
            {
                "id": random.randint(1, 100),
                "name": f"Package: {request.package_details}",
                "quantity": 1,
                "price": 15.0  # Flat rate for delivery
            }
        ],
        "total_price": 15.0,
        "status": "Booked"
    }
    
    # Update the order list
    db_orders.append(new_order)
    
    return {
        "id": new_id,
        "status": "Booked",
        "pickup_address": request.pickup_address,
        "delivery_address": request.delivery_address,
        "message": "Delivery booked successfully!"
    }
