from core.security import get_password_hash

db_orders = [
    {
        "id": 1234,
        "items": [
            {"id": 1, "name": "Burger", "quantity": 1, "price": 10.0},
            {"id": 2, "name": "Fries", "quantity": 2, "price": 5.0}
        ],
        "total_price": 20.0,
        "status": "Delivered"
    },
    {
        "id": 1235,
        "items": [
            {"id": 3, "name": "Pizza", "quantity": 1, "price": 15.5}
        ],
        "total_price": 15.5,
        "status": "Picked"
    },
    {
        "id": 1236,
        "items": [
            {"id": 4, "name": "Salad", "quantity": 2, "price": 8.0}
        ],
        "total_price": 16.0,
        "status": "Pending"
    }
]

profile_db = {
    "username": "johndoe",
    "email": "john.doe@example.com",
    "phone": "+1 234 567 890",
    "address": "123 Express St, Delivery City"
}

users_db = {
    "johndoe": {
        "username": "johndoe",
        # pre-hashed value of "admin123" — generated separately
        "hashed_password": "$2b$12$AN4qg0wf/CFGUkACgqbJ2uRg7p8N7mJbiqfpc0fnYjqCqBopPgdIa"
    }
}
