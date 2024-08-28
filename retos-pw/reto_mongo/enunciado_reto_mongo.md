# 🎯 Biblioteca virtual

## 📌 Objetivo

Desarrollar una aplicación web básica para la gestión de libros en una biblioteca virtual. La aplicación permitirá a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los libros disponibles en la biblioteca. Además, se gestionarán las relaciones entre libros y autores, de modo que un libro pueda estar asociado a múltiples autores y un autor pueda estar asociado a múltiples libros.

## 🛠️ Tecnologías a repasar

- Frontend: HTML, CSS, JavaScript (con algún framework como React si se desea).
- Backend: Node.js con Express.js para la creación de la API RESTful.
- Base de Datos: MongoDB, aprovechando Mongoose para manejar las relaciones entre documentos de forma efectiva.
- Postman para probar las rutas del API.

## 📝 Requisitos del Proyecto:

### Frontend:

- Crear una interfaz web simple utilizando HTML y CSS.
- La interfaz debe permitir a los usuarios interactuar con las funcionalidades principales del sistema (agregar, editar, eliminar y ver libros).

### Backend:

- Implementar un servidor básico utilizando Node.js y Express.
- El servidor debe manejar las solicitudes HTTP y realizar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos MongoDB.
- Definir las rutas necesarias para cada operación (por ejemplo, /books, /books/:id, etc.).

### Base de Datos:

- Usar MongoDB para almacenar la información de los libros.
- Crear una colección en MongoDB para los libros, donde cada documento representa un libro con campos como título, autor, género, año de publicación, y cualquier otra característica que consideres necesario .

## Funcionalidades:

1. **Gestión de Libros:**

   - Agregar Libro: Permitir a los usuarios agregar nuevos libros, incluyendo detalles como el título, descripción, fecha de publicación, género, y los autores asociados.
   - Editar Libro: Posibilidad de modificar la información de un libro existente, incluyendo la actualización de los autores asociados.
   - Eliminar Libro: Permitir a los usuarios eliminar libros de la biblioteca.
   - Ver Libros: Mostrar una lista de todos los libros en la biblioteca, con la opción de ver detalles específicos de cada libro.

2. **Gestión de Autores:**

   - Agregar Autor: Permitir a los usuarios agregar nuevos autores, incluyendo detalles como nombre, biografía, y lista de libros asociados.
   - Editar Autor: Posibilidad de modificar la información de un autor existente, incluyendo la actualización de los libros asociados.
   - Eliminar Autor: Permitir a los usuarios eliminar autores de la biblioteca, asegurándose de que los libros asociados se gestionen adecuadamente.
   - Ver Autores: Mostrar una lista de todos los autores en la biblioteca, con la opción de ver detalles específicos de cada autor.

3. **Relación Libros-Autores:**

   - Implementar una relación muchos a muchos (many-to-many) entre libros y autores, de manera que un libro pueda tener múltiples autores y un autor pueda estar asociado a múltiples libros.

4. **Despliegue en producción:**

   - Publicación en Render o Vercel: Implementar la publicación de la aplicación en una plataforma de hosting como Render o Vercel. Este paso incluirá:

     - Configuración del entorno de producción, asegurando que todas las variables de entorno estén correctamente establecidas.
     - Desplegar el frontend y el backend, configurando rutas adecuadas para la API y el cliente.
     - Verificación de la correcta integración de la base de datos MongoDB en el entorno de producción.

5. **Arquitectura de la Aplicación:**

- La aplicación seguirá el patrón de diseño Modelo-Vista-Controlador (MVC) para organizar el código de manera modular y mantener una clara separación de responsabilidades.

- Modelo (Model):
  - Definición del Modelo de Datos: Los modelos representarán la estructura de los datos de la aplicación. En este caso, se definirán modelos para "Libro" y "Autor" utilizando Mongoose para interactuar con la base de datos MongoDB.
- Vista (View):

  - Interfaz de Usuario: La vista será responsable de la presentación de los datos al usuario. Se desarrollarán vistas dinámicas utilizando HTML, CSS y JavaScript (o frameworks como React/Vue.js), que consumirán la API y mostrarán la información de libros y autores.

- Controlador (Controller):

  - Lógica de Negocio: Los controladores gestionarán la lógica de la aplicación, recibiendo las solicitudes de los usuarios, interactuando con los modelos para realizar operaciones CRUD, y devolviendo las respuestas adecuadas a las vistas.
  - Rutas: Los controladores estarán vinculados a rutas específicas en la aplicación, como GET /libros, POST /libros, PUT /libros/:id, DELETE /libros/:id, y rutas similares para autores.

## 📚 Recursos externos para resolver el reto

- [📖 Documentación mongoDB](https://www.mongodb.com/docs/manual/)
- [📖 Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [📖 Relaciones mongoDB](https://www.freecodecamp.org/espanol/news/introduccion-a-mongoose-para-mongodb/)
- [📖 Router express](https://bluuweb.github.io/node/04-router/)

