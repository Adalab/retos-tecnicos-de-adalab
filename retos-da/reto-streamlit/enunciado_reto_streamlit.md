# 🎯 Data Analytics: "DataVoyage: Explorando el Titanic con Streamlit"

## 📌 Objetivo

El objetivo de este reto es desarrollar una aplicación web interactiva utilizando Streamlit, una biblioteca de Python que permite crear interfaces web de manera rápida y sencilla. Con este reto, aprenderás a manejar los elementos fundamentales de Streamlit y a integrar diferentes recursos para desplegar visualizaciones y análisis de datos en una plataforma accesible a usuarios.


## 🛠️ Tecnologías que Repasa

- **Python**: Lenguaje de programación base para el desarrollo.
- **Streamlit**: Framework para crear aplicaciones web interactivas.
- **Pandas**: Librería para manipulación y análisis de datos.
- **Matplotlib/Seaborn/Plotly**: Librerías para visualización de datos.



## 📝 Tareas

- 1. **Instalación de Streamlit**: Instalar Streamlit en tu entorno local utilizando pip: pip install streamlit.
- 2. **Creación de un script python llamado app.py**: En este fichero es donde se desarrolla la aplicación que carga, explora y analiza el dataset de Titanic.
- 3. **Ejecución desde terminal del fichero app.py**.
- 4. **Despliegue en Streamlit Cloud (opcional)**: Configurar la aplicación para que sea desplegada en Streamlit Cloud.
  


### ¿Qué debe visualizarse al ejecutarse la aplicación?:

- **Menú lateral con las siguientes opciones**:
    - 1. **Carga de archivo**: Opción para cargar un archivo desde el ordenador. Este es el archivo que se usará como ejemplo: [titanic](./recursos/titanic.csv).
    - 2. **Exploración**: Botón para explorar los datos: al pulsar este botón, se deberrían poder visualizar las siguientes características del dataset:
      - Un mensaje indicando que los datos se han cargado satisfactoriamente.
      - Las primeras filas.
      - EL número de filas y columnas.
      - Los nombres de las columnas y sus tipos de datos.
      - El número de filas duplicadas.
      - El % de valores nulos por columna.
    - 3. **Limpieza**: 
      - Checklist con opciones de limpiza de datos. En este caso, es posible seleccionar más de una a la vez. Las opciones pueden ser eliminar valores nulos, eliminar duplicados o cualquier otra acción que se considere oportuna.
      - Botón que ejecute la selección anterior. Una vez pulsado el botón, se deberían visualizar los resultados de las tareas de limpieza (por ejemplo, las columnas que se han eliminado por contener un alto valor de nulos o las filas duplicadas que se han eliminado - esto son sólo sugerencias)._
    - 4. **Análisis**: 
      - Lista desplegable con los siguientes análisis (pero se pueden añadir más): resumen de datos, distribución por edad, supervivencia por género, supervivencia por clase y supervivencia por clase y género. Aquí se seleccionaría uno cada vez.
      - Botón que ejecute el análisis seleccionado. Al ejecutar el botón, deberían poder verse las tablas o visualizaciones que correspondan a la selección.
       _Aquí debería ser posible realizar más de un análisis. Una vez se ha ejecutado un análisis, debería ser posible seguir añadiendo más análisis y que todos ellos permanecieran en la pantalla (es decir, que un análisis no sobreescriba el anterior)._

- **Pantalla principal donde se vayan visualizando todos los resultados y explicaciones correspondientes a las selecciones del menú lateral**:


**Notas**:
- _Se espera que además se incluyan los correspondientes títulos o explicaciones que faciliten el uso de la aplicación_.
- _Se aconseja el uso de las librerías Pandas, Matplotlib, Seaborn, Plotly o cualquier otra que permita desarrollar las tareas satisfactoriamente._



## ✅ Resultado Esperado

El resultado esperado es un script de python (.py) que al ser ejecutado, genere una aplicación web interactiva que permita:

- Cargar un conjunto de datos en formato CSV.
- Aplicar filtros que permitan al usuario seleccionar diferentes tareas o visualizar diferentes resultados.
- Desplegar la aplicación de forma pública en Streamlit Cloud para que cualquier usuario pueda acceder a ella (opcional).

En este [video](https://www.loom.com/share/94468ce75f334b55831938213975d845?sid=b144567c-2f17-44c0-9829-e8cafed03e4f), se puede encontrar un ejemplo de lo que se espera, pero es posible añadir o modificar todo aquéllo que se considere oportuno. 

## 📚 Recursos Externos para Resolver el Reto
- [📖 Documentación de Streamlit](https://docs.streamlit.io/)
- [📖 Curso gratuito de Streamlit](https://docs.streamlit.io/library/get-started)
- [📖 Galería de Streamlit](https://streamlit.io/gallery)
- [📖 Ejemplo de Dashboard en Streamlit](https://www.youtube.com/watch?v=o6wQ8zAkLxc)
- [📖 Foro y Comunidad en Streamlit](https://discuss.streamlit.io/c/streamlit-examples/9)
- [📖 Blog Oficial de Streamlit](https://blog.streamlit.io/)
- [📖 Despliege de la Aplicación en Streamlit Cloud](https://streamlit.io/cloud)
- [📖 Tutoriales de Pandas](https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html)
- [📖 Visualización de datos con Matplotlib](https://matplotlib.org/stable/tutorials/index.html)



