# 🎯 Data Analytics: "AWS Data Explorer"

## 📌 Objetivo
El objetivo de este ejercicio es que las alumnas apliquen y combinen sus conocimientos investigados en Amazon S3 y Amazon QuickSight para crear un dashboard de informes interactivo. Utilizando datos almacenados en Amazon S3, deberán diseñar y construir un panel de control en QuickSight que presente análisis detallados sobre un producto en particular. Esto incluye la importación y preparación de datos desde S3, la creación de visualizaciones que destaquen las métricas clave del producto, y la configuración de filtros y opciones interactivas que permitan una exploración más profunda de los datos.

## 🛠️ Tecnologías que Repasa
- **Web Scraping:** Técnicas para extraer datos de sitios web para obtener información que podría ser de interés para exponer en mi apartado gráfico.
- **Extracción y limpieza de Datos:** Métodos para recolectar y limpiar datos desde diferentes fuentes, teniendo en cuenta la calidad de los datos a obtener.
- **Implementacion de Dashboards:** Si bien en el bootcamp se vieron herramientas como Tableau y PowerBI, los conocimientos previos serán necesarios a la hora de un diseño efectivo de nuestra representación gráfica en AWS Quicksight.


## 📝 Enunciado

En este ejercicio que tiene por principal objetivo ganar experiencia con las diferentes herramientas de AWS, la idea es que busquen un conjunto de datos de la fuente que deseen a través de webscraping y estos datos deben procesarse (limpiarse) para luego subirlos en formato CSV a un bucket de AWS S3. Posteriormente, estos datos ya procesados deberán ser la base para la creación de un dashboard en AWS Quicksight, donde plasmaremos la información más importante de los datos que tenemos en nuestro bucket de AWS S3.
- Recopilar información de una fuente externa (A través de webscraping de la fuente que nosotras deseamos).
- Procesar y limpiar la información.
- Exportar la información ya limpia en un archivo CSV.
- El archivo CSV deberá ser alojado en un bucket de AWS S3 para luego utilizarse donde sea.
- En AWS Quicksight, tomar la información del bucket de AWS S3 para armar un dashboard que muestre la información más relevante del tema elegido.
- Exportar el dashboard en PDF.


## ✅ Resultado Esperado

Se espera que la arquitectura realizada entre AWS S3 y AWS Quicksight funcione de manera correcta, tomando la información en tiempo real y mostrando los gráficos necesarios.

- El formato de entrada será CSV (los datos ya limpios)
- Se debe realizar una limpieza de los datos en un notebook con el nombre "data_explorer_APELLIDO_MES_AÑO" (donde mes y año son en formato numérico y representa al mes y año del comienzo del reto). En caso de ser un grupo solo irá un apellido, pero marcando dentro del notebook (en el markdown) los integrantes de dicho grupo.
- Ejemplo de nombre de notebook: "data_explorer_RORDRIGUEZ_05_2024".
- Este notebook además de contener el proceso de EDA también tendrá las imágenes, url y links de acceso a los diferentes recursos utilizados (AWS S3). Se debe documentar aquí el trabajo hecho con explicación del paso a paso.
- Se dejará el bucket de trabajo con permisos para todos, a fin de poder ver los archivos alojados allí.
- El resultado final (Dashboard) será algo similar a [esto](./recursos/ejemplo_dashboard_aws.pdf).

## 📚 Recursos Externos para Resolver el Reto
- [📖 Guía de usuario Amazon S3](https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/Welcome.html)
- [📖 Guía de usuario Amazon Quicksight](https://docs.aws.amazon.com/es_es/quicksight/latest/user/welcome.html)
- [📖 Crear un conjunto de datos utilizando archivos de S3](https://docs.aws.amazon.com/es_es/quicksight/latest/user/create-a-data-set-s3.html)
- [📖 Uso de IAM con Amazon QuickSight](https://docs.aws.amazon.com/es_es/quicksight/latest/user/security-iam.html)

Algunos recursos extra generados por parte del cuerpo docente para simplificar algunas cosas!

- [📖 Creación de cuentas AWS](./recursos/creacion_cuenta_aws.pdf)
- [📖 Creación de usuario IAM](./recursos/creacion_usuario_iam.pdf)
- [📖 Configuración de alertas](./recursos/configuracion_de_alertas.pdf)
- [📖 Manifiesto.json](./recursos/manifiesto.json) Reemplaza el "AQUI-TU-BUCKET" con el nombre de bucket a utilizar (IMPORTANTE AL USAR AWS Quicksight).
- [📖 Eliminando AWS Quicksight](./recursos/eliminando_aws_quicksight.pdf)
