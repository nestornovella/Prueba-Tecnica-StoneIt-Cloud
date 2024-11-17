# Aplicación de Gestión de Tareas

¡Bienvenido al desafío de desarrollo de una aplicación web de gestión de tareas! Este proyecto fue creado como prueba técnica para evaluar habilidades en desarrollo Fullstack. 

## Descripción

La aplicación permite a los usuarios registrarse, iniciar sesión y gestionar sus tareas personales de forma eficiente. Los usuarios pueden crear tareas con diferentes estados y etiquetas, eliminarlas y filtrar la lista de tareas según sus necesidades.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- **Registro de Usuarios**
  - Formulario de registro con validaciones para nombre de usuario, correo electrónico y contraseña.
  - Almacenamiento seguro de contraseñas en la base de datos.

- **Inicio de Sesión**
  - Autenticación de usuarios mediante JWT.

- **Gestión de Tareas**

  - **Crear Tareas**: Permite a los usuarios crear tareas con un título, una descripción, una fecha límite y múltiples etiquetas.
  - **Estados de Tareas**: Las tareas pueden tener diferentes estados como "trabajo", "hogar" y "completada".
  - **Eliminar Tareas**: Posibilidad de eliminar tareas de la lista.
  - **Etiquetas**: Las tareas pueden ser etiquetadas con múltiples etiquetas (ej: "trabajo", "urgente") para una mejor organización.
  - **Filtro de Etiquetas**: Permite a los usuarios filtrar las tareas por una o varias etiquetas a la vez.
  - **Personalización de Fondos**: Los usuarios pueden personalizar los fondos de pantalla de la aplicación.

## Tecnologías Utilizadas

- **Frontend**
  - React con TypeScript
  - Material UI para la interfaz de usuario
  - Diseño responsive y manejo de estado

- **Backend**
  - Node.js con Express.js
  - API RESTful para la comunicación entre frontend y backend
  - Base de datos SQLite
  - Implementación de autenticación JWT

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio:
   
   git clone (https://github.com/nestornovella/Prueba-Tecnica-StoneIt-Cloud.git)

Instala las dependencias para el frontend:
cd client
npm install

Instala las dependencias para el backend:
cd api
npm install

Configura tu base de datos SQLite. Asegúrate de establecer la variable de entorno DATABASE_URL en tu archivo .env.

Uso

Para iniciar el backend, navega a la carpeta del backend y ejecuta:
npm run dev

Para iniciar el frontend, navega a la carpeta del frontend y ejecuta:
npm run dev

Accede a la aplicación en tu navegador en http://localhost:3001.

Haz un fork del repositorio.
Crea una rama para tu característica: git checkout -b feature/nueva-caracteristica.
Realiza tus cambios y haz commit: git commit -m 'Añadir nueva característica'.
Haz push a la rama: git push origin feature/nueva-caracteristica.
Abre un Pull Request.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
