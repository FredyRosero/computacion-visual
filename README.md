# Computacion visual 2025-1

## 📂 Acceso a documentos:
👉 https://drive.google.com/drive/folders/1Tk1Pq6gbDcQrpZP4X0cQo_f8rC9wncYu?usp=drive_link
| Semana | Título | Contenidos Principales | Tecnología |
| ------ | ------ | ---------------------- | ---------- |
| 1 | Estructuras de Datos Gráficas y Modelado 3D | Vértices, aristas, caras, Formatos OBJ, GLTF, STL, Jerarquías y árboles de transformación | Unity, Three.js, Python |
| 2–3 | Fundamentos de Computación Visual y Geometría | Visión artificial, percepción visual,  Transformaciones 2D y homogéneas, Filtros, convoluciones | Processing, Python (OpenCV, NumPy), Unity |

## Python projects

### Virtual environment

Create a virtual environment
```bash
python -m venv .venv
source .venv/bin/activate
python
```

Check the python executable path
```python
import sys
print(sys.executable)
```

Deactivate the virtual environment
```bash
deactivate
```

### Jupyter Notebook

Install jupyter and ipykernel
```bash
pip install jupyter ipykernel
```

If you have a `.venv` directory not in the root of your project, but in a subdirectory, you can got to that directory and run the following command to install the kernel:
```bash
cd path/to/your/subdirectory
python -m ipykernel install --user --name=.venv
```

To list all available kernels
```bash
jupyter kernelspec list
```


The launch the jupyter notebook
```bash
jupyter notebook
```

Check the notebook server URL
```bash
jupyter notebook list
```

### Install requirements
Install requirements
```bash
pip install -r requirements.txt
```

