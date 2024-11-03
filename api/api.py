
from fastapi import FastAPI, File, UploadFile
from tensorflow.keras.models import load_model
import numpy as np
import cv2

from fastapi.responses import JSONResponse
from pydantic import BaseModel
import base64
from fastapi.middleware.cors import CORSMiddleware

import os
from dotenv import load_dotenv

load_dotenv()
api_url = os.getenv("API_URL", "http://localhost:3000")
#api_url = os.getenv("API_URL")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[api_url],  # Origen del frontend en React
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos HTTP
    allow_headers=["*"],  # Permitir todos los encabezados necesarios
)

# app = FastAPI()

# Cargar el modelo previamente entrenado
model = load_model('F:/Users/Documents/Program Class/solo Ciencia de Datos/Neuroma_test/models/modelo_neumonia.keras')


# class ImageData(BaseModel):
#     image: str

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Leer la imagen subida y preprocesarla
        image = await file.read()
        np_img = np.fromstring(image, np.uint8)
        img = cv2.imdecode(np_img, cv2.IMREAD_GRAYSCALE)

        if img is None:
            return {"error": "Failed to decode image"}

        img_resized = cv2.resize(img, (150, 150))  # Redimensionar como en el notebook
        img_resized = img_resized.reshape(1, 150, 150, 1) / 255.0  # Normalizar la imagen

        # Realizar la predicción
        prediction = model.predict(img_resized)
        prediction = (prediction > 0.5).astype("int32")

        result = "Pneumonia" if prediction[0][0] == 0 else "Normal"
        return {"result": result}

    except Exception as e:
        print(f"Error processing image: {e}")
        return JSONResponse(content={"error": "An error occurred while processing the image"}, status_code=500)


@app.get("/health", status_code=200)
async def get_health() -> dict:
    return {
        "status": "OK"
    }
