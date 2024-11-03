import React, { useState } from "react";
import axios from "axios";

function UploadImage() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState("");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        // Imprimir el contenido del FormData en la consola
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
        
        try {
            const response = await axios.post("http://localhost:8000/predict", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setResult(response.data.result); // Mostrar el resultado obtenido de la API
        } catch (error) {
            console.error("Error uploading image:", error.response ? error.response.data : error.message);
            alert("There was an error with the image upload.");
        }

        // try {
        //     const response = await axios.post(`${process.env.REACT_APP_API_URL}/predict`, formData, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         },
        //     });
        //     setResult(response.data.result); // Mostrar el resultado obtenido de la API
        // } catch (error) {
        //     console.error("Error uploading image:", error.response ? error.response.data : error.message);
        //     alert("There was an error with the image upload.");
        // }
    };

    return (
        <div>
            <h2>Diagnóstico de Neumonía</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept="image/*" />
                <button type="submit">Subir y Analizar</button>
            </form>
            {result && <p>Resultado: {result}</p>}
        </div>
    );
}

export default UploadImage;

