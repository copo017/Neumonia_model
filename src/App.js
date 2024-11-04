import React from "react";
import UploadImage from "src/UploadImage";
{/*import UploadImage from "F:/Users/Documents/Program Class/solo Ciencia de Datos/neumonia_modelo/src/UploadImage";*/}

function App() {
    return (
        <div className="App">
            <header>
                <h1>Predicción de Neumonía en Radiografías</h1>
                <UploadImage /> {/* Aquí se usa el componente */}
            </header>
        </div>
    );
}

export default App;