# Resumen del notebook y su propósito:

Este notebook tenía como objetivo entrenar y evaluar un modelo de clasificación de imágenes de rayos X para determinar si un paciente tiene neumonía o está sano (normal). A lo largo del notebook, recorrimos diferentes etapas que incluían la preparación de los datos, la construcción del modelo de red neuronal convolucional (CNN), su entrenamiento, evaluación, y análisis de resultados.

## Resumen de las etapas clave que vimos:

Carga y preprocesamiento de los datos:

Cargamos las imágenes del conjunto de datos de radiografías y las redimensionamos a un tamaño estándar de 150x150 píxeles. Las imágenes se dividieron en conjuntos de entrenamiento, validación y prueba.
Etiquetamos las imágenes como Neumonía o Normal.
Aumento de datos:

Aplicamos aumento de datos (data augmentation) para aumentar artificialmente el tamaño del conjunto de entrenamiento mediante transformaciones como rotaciones, desplazamientos y volteos horizontales. Esto ayudó a evitar el sobreajuste (overfitting) y permitió que el modelo generalizara mejor.
Construcción del modelo:

Definimos un modelo de red neuronal convolucional (CNN) usando Keras. Este modelo tenía varias capas convolucionales, de normalización por lotes, y capas de pooling para extraer características importantes de las imágenes.
Utilizamos la activación ReLU en las capas ocultas y sigmoid en la capa de salida, ya que es un problema de clasificación binaria.
Entrenamiento del modelo:

Entrenamos el modelo usando el conjunto de datos aumentado durante 12 épocas y usamos un callback (ReduceLROnPlateau) para reducir la tasa de aprendizaje si el rendimiento en validación dejaba de mejorar.
Visualizamos las curvas de precisión y pérdida tanto para el conjunto de entrenamiento como para el conjunto de validación para detectar problemas como sobreajuste.
Evaluación del modelo:

Evaluamos el rendimiento del modelo en el conjunto de prueba usando métricas como precisión, recall y F1-score mediante el reporte de clasificación (classification_report).
Generamos una matriz de confusión para analizar las clasificaciones correctas e incorrectas del modelo, lo que nos permitió observar los aciertos y errores del modelo en cada clase.
Visualización de resultados:

Mostramos imágenes correctamente clasificadas y mal clasificadas, analizando los errores del modelo y observando qué patrones no logró captar correctamente.
Este análisis es importante para identificar debilidades del modelo y posibles mejoras en el futuro.

## Propósito general:

El propósito de este notebook fue desarrollar un sistema de detección automática de neumonía basado en imágenes de rayos X mediante técnicas de deep learning. El sistema clasifica las imágenes en dos clases: neumonía y normal. A través de este proceso, aprendimos a:

Preprocesar imágenes y realizar aumento de datos.
Construir una red neuronal convolucional (CNN) para la clasificación de imágenes.
Entrenar y ajustar un modelo de deep learning.
Evaluar y analizar el rendimiento del modelo utilizando métricas y visualizaciones.
Detectar áreas de mejora mediante la visualización de los errores de clasificación.
El resultado es un modelo que puede ayudar en la detección de neumonía a partir de imágenes de rayos X, lo cual puede tener aplicaciones prácticas en el campo de la medicina, ayudando a los médicos a diagnosticar la neumonía más rápidamente.

## Conclusión:

Este notebook cubrió todos los aspectos principales del flujo de trabajo de machine learning para la detección de neumonía basada en imágenes, desde la preparación de los datos hasta la evaluación del modelo y la visualización de los resultados. El análisis de los errores de predicción también sugiere áreas donde el modelo puede ser mejorado, ya sea mediante ajustes en el preprocesamiento, mejoras en la arquitectura del modelo o entrenamientos más largos.

## Comando `curl` para Predicciones

Puedes usar el siguiente comando `curl` para enviar una solicitud POST a la API de predicción:

```sh
curl --location 'http://localhost:8000/predict' \
--form 'file=@"/path/to/file"'
```