from pydantic import BaseModel, Field
from datetime import datetime
import uuid 

class Message(BaseModel):
    id: uuid.UUID = Field(default_factory=uuid.uuid4)
    message: str
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)