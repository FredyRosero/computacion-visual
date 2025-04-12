# 🧪 Taller 1 - Transformaciones Básicas en Computación Visual

## 🔍 Objetivo del taller
Explorar los conceptos fundamentales de transformaciones geométricas (traslación, rotación y escala) en distintos entornos de programación visual. Cada estudiante debe crear un "Hola Mundo Visual" donde se muestre un objeto o escena básica y se le apliquen transformaciones estáticas y animadas en función del tiempo.

## 🔹 Actividades por entorno
Cada estudiante debe desarrollar el ejercicio en todos los entornos descritos a continuación y documentar brevemente los resultados en el README.md correspondiente.

### 1. 💻 Python (Colab o Jupyter Notebook)
Herramientas: matplotlib, numpy, imageio
* Crear una figura 2D con puntos o formas
* Aplicar traslación, rotación y escala usando matrices de transformación
* Generar una animación (usando bucles o interpolación)
* Animar la transformación en función del tiempo (t) o del frame
* Exportar como GIF animado con imageio
Opcional: mostrar la matriz resultante de cada transformación y cómo cambia con el tiempo

### 2. 🎮 Unity (versión LTS)(Opcional)
Escenario:
* Crear un proyecto vacío en 3D
* Agregar un cubo o esfera a la escena
* Crear un script en C# que aplique:
   * Traslación aleatoria por eje X o Y cada ciertos segundos
   * Rotación constante dependiente de Time.deltaTime
   * Escalado oscilante en función de Mathf.Sin(Time.time)
Requisitos: usar transform.Translate(), transform.Rotate(), transform.localScale

### 3. 🌐 Three.js con React Three Fiber
Escenario:
* Crear un proyecto con Vite y React Three Fiber
* Agregar un objeto 3D (cubo o esfera)
* Aplicar animaciones con useFrame para:
   * Trasladar el objeto por una trayectoria senoidal o circular
   * Rotarlo sobre su propio eje con incremento en cada frame
   * Escalarlo suavemente con una función temporal (Math.sin(clock.elapsedTime))
Bonus: incluir OrbitControls para navegar la escena

### 4. 🎨 Processing (2D o 3D)
Escenario:
* Crear un sketch simple (2D o 3D)
* Dibujar una figura geométrica (rect, ellipse o box)
* Aplicar transformaciones usando:
   * translate(), rotate(), scale()
   * pushMatrix() y popMatrix() para aislar transformaciones
   * frameCount, millis() o sin() para crear transformaciones en el tiempo
Ejemplo: un cubo que gira, se traslada de forma ondulada y se escala cíclicamente en función del tiempo transcurrido
