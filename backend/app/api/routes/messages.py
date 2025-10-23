import fastapi
from app.schemas.Message import Message
import asyncio
router = fastapi.APIRouter(tags=["messages"])

@router.get("/messages")
async def get_messages() -> list[Message]:
    await asyncio.sleep(2)
    return [Message(message="Hello, world1!"), Message(message="Hello, world2!")]