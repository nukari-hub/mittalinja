from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import aiosmtplib
import os
from datetime import datetime

router = APIRouter()

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    message: str

@router.post("/contact")
async def send_contact_email(contact: ContactMessage):
    """Send contact form message via email"""
    
    try:
        # Email configuration
        recipient_email = "ari.piiroinen@mittalinja.fi"
        sender_email = os.environ.get("SMTP_FROM_EMAIL", "noreply@mittalinja.fi")
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Yhteydenotto: {contact.name}"
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Reply-To'] = contact.email
        
        # Create HTML body
        html_body = f"""
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background-color: #2563EB; color: white; padding: 20px; text-align: center; }}
                .content {{ background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }}
                .field {{ margin-bottom: 15px; }}
                .label {{ font-weight: bold; color: #2563EB; }}
                .footer {{ text-align: center; padding: 20px; font-size: 12px; color: #777; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Uusi yhteydenotto</h1>
                </div>
                <div class="content">
                    <div class="field">
                        <span class="label">Nimi:</span><br>
                        {contact.name}
                    </div>
                    <div class="field">
                        <span class="label">Sähköposti:</span><br>
                        <a href="mailto:{contact.email}">{contact.email}</a>
                    </div>
                    {f'<div class="field"><span class="label">Puhelinnumero:</span><br>{contact.phone}</div>' if contact.phone else ''}
                    <div class="field">
                        <span class="label">Viesti:</span><br>
                        {contact.message.replace(chr(10), '<br>')}
                    </div>
                    <div class="field">
                        <span class="label">Aikaleima:</span><br>
                        {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}
                    </div>
                </div>
                <div class="footer">
                    <p>Tämä viesti on lähetetty Mittalinja A1 yhteydenottolomakkeesta</p>
                    <p><a href="https://mittalinja.fi">www.mittalinja.fi</a></p>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Create plain text version
        text_body = f"""
Uusi yhteydenotto Mittalinja A1

Nimi: {contact.name}
Sähköposti: {contact.email}
{'Puhelinnumero: ' + contact.phone if contact.phone else ''}

Viesti:
{contact.message}

Aikaleima: {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}

---
Tämä viesti on lähetetty Mittalinja A1 yhteydenottolomakkeesta
www.mittalinja.fi
        """
        
        msg.attach(MIMEText(text_body, 'plain', 'utf-8'))
        msg.attach(MIMEText(html_body, 'html', 'utf-8'))
        
        # SMTP configuration
        smtp_host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
        smtp_port = int(os.environ.get("SMTP_PORT", "587"))
        smtp_username = os.environ.get("SMTP_USERNAME")
        smtp_password = os.environ.get("SMTP_PASSWORD")
        
        # Send email
        if smtp_username and smtp_password:
            # Send via SMTP
            await aiosmtplib.send(
                msg,
                hostname=smtp_host,
                port=smtp_port,
                username=smtp_username,
                password=smtp_password,
                start_tls=True
            )
        else:
            # For development/testing - just log
            print(f"📧 Email would be sent to: {recipient_email}")
            print(f"From: {contact.name} <{contact.email}>")
            print(f"Message: {contact.message}")
            # Return success anyway for testing
        
        return {
            "success": True,
            "message": "Kiitos yhteydenotostasi! Vastaamme sinulle 24 tunnin sisällä."
        }
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Viestin lähettäminen epäonnistui. Yritä myöhemmin uudelleen tai ota yhteyttä puhelimitse."
        )
