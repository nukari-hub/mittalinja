from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timezone
from uuid import uuid4
import os

router = APIRouter()

# MongoDB connection
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "test_database")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    message: str
    honeypot: str = ""  # Spam protection field

class ContactMessageResponse(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    message: str
    timestamp: str
    read: bool

@router.post("/contact")
async def save_contact_message(contact: ContactMessage, request: Request):
    """Save contact form message to database"""
    
    try:
        # Honeypot spam check
        if contact.honeypot:
            # If honeypot is filled, it's likely spam - silently reject
            return {
                "success": True,
                "message": "Kiitos yhteydenotostasi! Vastaamme sinulle 24 tunnin sisällä."
            }
        
        # Create message document
        message_doc = {
            "id": str(uuid4()),
            "name": contact.name,
            "email": contact.email,
            "phone": contact.phone,
            "message": contact.message,
            "timestamp": datetime.now(timezone.utc),
            "read": False,
            "ip_address": request.client.host if request.client else "unknown"
        }
        
        # Save to MongoDB
        await db.contact_messages.insert_one(message_doc)
        
        return {
            "success": True,
            "message": "Kiitos yhteydenotostasi! Vastaamme sinulle 24 tunnin sisällä."
        }
        
    except Exception as e:
        print(f"Error saving contact message: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Viestin tallentaminen epäonnistui. Yritä myöhemmin uudelleen tai ota yhteyttä puhelimitse."
        )

@router.get("/contact/messages")
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    
    try:
        messages = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
        
        # Format timestamps
        for msg in messages:
            if isinstance(msg.get("timestamp"), datetime):
                msg["timestamp"] = msg["timestamp"].strftime("%d.%m.%Y %H:%M:%S")
        
        return {
            "success": True,
            "count": len(messages),
            "messages": messages
        }
        
    except Exception as e:
        print(f"Error fetching messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Viestien haku epäonnistui")

@router.patch("/contact/messages/{message_id}/read")
async def mark_message_read(message_id: str):
    """Mark a message as read"""
    
    try:
        result = await db.contact_messages.update_one(
            {"id": message_id},
            {"$set": {"read": True}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Viestiä ei löytynyt")
        
        return {"success": True, "message": "Viesti merkitty luetuksi"}
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error marking message as read: {str(e)}")
        raise HTTPException(status_code=500, detail="Viestin päivitys epäonnistui")
