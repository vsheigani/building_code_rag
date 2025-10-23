from fastapi import APIRouter
from app.settings import settings
from app.api.routes import messages

api_router = APIRouter()
api_router.include_router(messages.router)

