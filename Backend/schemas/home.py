from pydantic import BaseModel
from typing import List

class HomeMessage(BaseModel):
    title: str
    description: str

class HomeData(BaseModel):
    message: HomeMessage
    features: List[str]
