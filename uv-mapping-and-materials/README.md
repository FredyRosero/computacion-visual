# UV Mapping y Tipos de Materiales
## Objetivos
- Entender cómo se proyectan texturas en la superficie de un modelo.  
- Diferenciar materiales básicos y avanzados.  

## Explicación
- **UV Mapping**: coordenadas 2D en cada vértice; unwrap, tiling, overlapping, lightmap UVs.  
- **Tipos de materiales**:  
  - *Unlit* (sin luces, solo textura).  
  - *Lit PBR* (albedo, metallic, roughness, normal, AO).  
  - *Transparent/Alpha blended* (vidrio, agua).  
  - Shader Graph personalizados (toon, stylized).  
- **Material instancing** y variantes (`shader_feature`, `multi_compile`).  

## Setup

~~~bash
python -m venv venv
~~~

~~~bash
source venv/bin/activate  # En Linux o macOS
venv\bin\Activate.ps1     # En Windows
~~~

~~~bash
pip install -r requirements.txt
jupyter labextension install jupyter-threejs
~~~

